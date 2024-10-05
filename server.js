import dotenv from "dotenv";
dotenv.config();
import { promises as fs } from "fs";
import express from "express";
import { createServer } from "vite";
import axios from "axios";
import { renderToString } from "react-dom/server";
import path from "path";
import { StaticRouter } from "react-router-dom/server";
import App from "./src/App";
const app = express();
app.use(express.static(path.resolve(__dirname, "build")));

const PORT = process.env.PORT || 5173;

async function fetchData(url) {
  console.log(url);
  const slug = url.split("/").pop();
  console.log(`Fetching data for slug: ${slug}`);
  try {
    const response = await axios.get(
      `https://api.kafsco.com/api/v1/events/geteventbyurl/${slug}`,
      {
        headers: {
          is_guest_user: "yes",
        },
      }
    );
    console.log(response);
    return { eventDetail: response.data.data };
  } catch (error) {
    console.error("Error fetching meta data:", error);
  }
}

async function startServer() {
  const vite = await createServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
  });
  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      let template = await fs.readFile("./index.html", "UTF-8");
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry. ssrLoadModule automatically transforms
      //    ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

      // 4. render the app HTML. This assumes entry-server.js's exported
      //     `render` function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const context = {};
      const appHtml = renderToString(
        `<StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>`
      );

      fs.readFile(
        path.resolve(__dirname, "build", "index.html"),
        "utf8",
        (err, data) => {
          if (err) {
            console.error("Failed to read index.html", err);
            return res.status(500).send("Internal Server Error");
          }

          return res.send(
            data.replace(
              '<div id="root"></div>',
              `<div id="root">${appHtml}</div>`
            )
          );
        }
      );
      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      const { eventDetail } = await fetchData(url);
      const slug = url.split("/").pop();
      const metaData = generateMetaInfo({
        path: url,
        slug,
        eventDetail,
      });

      const metaTags = getHeader(metaData);

      // const html = template.replace(`<!--meta-tags-->`, metaTags);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).end("Internal Server Error");
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
  });
}
function generateMetaInfo({ path, slug = "", eventDetail = {} }) {
  switch (path) {
    case "/":
      return {
        seoTitle: "Kafsco | Book your tickets Now",
        seoDescription: "",
        seoImage: "",
      };

    case `/event/${slug}`:
      return {
        seoTitle: `${eventDetail?.title} - Pre-Owned Two Wheeler at DriveX`,
        seoDescription: `${eventDetail?.description} - Pre-Owned Two Wheeler at DriveX`,
        seoImage: `${eventDetail?.posterUrl}`,
      };

    default:
      return {
        seoTitle: "Event",
        seoDescription: "",
        seoImage: "",
      };
  }
}
const getHeader = (metaData) => {
  return `
    <title>${metaData.seoTitle}</title>
    <meta property="og:title" content="${metaData.seoTitle}">
    <meta property="og:description" content="${metaData.seoDescription}">
    <meta property="og:image" content="${metaData.seoImage}">
  `;
};

startServer();

import express from "express";
import path from "path";
import fs from "fs";
import axios from "axios";
import { fileURLToPath } from "url";

// Derive __dirname from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;
const __PAGE_TITLE__ = "Dabali Store";

// Function to fetch event data
async function fetchData(url) {
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
    return { eventDetail: response.data.data };
  } catch (error) {
    console.error("Error fetching meta data:", error);
    return { eventDetail: {} }; // Return empty object on error
  }
}

// Function to generate meta information
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
        seoTitle: `${eventDetail?.title}`,
        seoDescription: `${eventDetail?.description}`,
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

// Function to generate header meta tags
const getHeader = (metaData) => {
  return `
    <title>${metaData.seoTitle}</title>
    <meta property="og:title" content="${metaData.seoTitle}">
    <meta property="og:description" content="${metaData.seoDescription}">
    <meta property="og:image" content="${metaData.seoImage}">
  `;
};

// Route handler
const todo = async (req, res) => {
  const url = req.url;
  let metaTags = "";

  if (url.includes("/event/")) {
    const { eventDetail } = await fetchData(url);
    const slug = url.split("/").pop();
    const metaData = generateMetaInfo({
      path: url,
      slug,
      eventDetail,
    });

    metaTags = getHeader(metaData);
    console.log(metaTags);
  }

  let htmlContent = fs.readFileSync(
    path.join(__dirname, "dist/index.html"),
    "utf8"
  );
  htmlContent = htmlContent.replace("<!--abc-->", metaTags);

  res.send(htmlContent);
};

// Static files middleware
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route to serve index.html for client-side routing
app.get("*", todo);

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}.`);
});

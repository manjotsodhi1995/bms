import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { renderToString } from "react-dom/server";
export const render = (url) => {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
};

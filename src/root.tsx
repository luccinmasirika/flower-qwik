import { Home } from "./screens/Home";

import "./global.css";

export default () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>AZ Garden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Home />
      </body>
    </html>
  );
};

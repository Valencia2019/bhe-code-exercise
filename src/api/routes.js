const { getHandler, defaultHandler } = require("./controller");
const url = require("url");
const routes = (request, response) => {
    const reqURL = request.url;
  const reqMethod = request.method;

  switch (reqMethod) {
    case "GET": {
      if (reqURL.startsWith("/get-prime") && reqURL.includes("?number=")) {
        const parsedUrl = url.parse(request.url, true);
        request.query = parsedUrl.query;
        getHandler(request, response);
      } else {
        defaultHandler(request, response);
      }
      break;
    }
    default: {
      defaultHandler(request, response);
    }
  }
};

module.exports = { routes };
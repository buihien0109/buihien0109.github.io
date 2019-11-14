const withCss = require("@zeit/next-css");
const path = require("path");

module.exports = withCss({
  webpack: (config) => {
    // Allow absolute import
    config.resolve.alias["components"] = path.join(__dirname, "components");

    return config;
  }
});
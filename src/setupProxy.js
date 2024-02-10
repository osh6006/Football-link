const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/naverApi", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
      pathRewrite: {
        "^/naverApi": "",
      },
    }),
  );
};

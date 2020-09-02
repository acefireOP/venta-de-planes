const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(proxy.createProxyMiddleware('/recaptcha', {
        target: 'https://www.google.com/',
        secure: false,
        changeOrigin: true,
    }))
}

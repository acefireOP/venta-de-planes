const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(proxy.createProxyMiddleware('/recaptcha', {
        target: 'https://vs-google.wom.cl:8443',
        secure: false,
        changeOrigin: true,
    }))
}

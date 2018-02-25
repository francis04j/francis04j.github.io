// sw-precache --config "sw-precache-config.js"
module.exports = {
    staticFileGlobs: [
        "css/**.css",
        "js/**.js",
        "images/**/*.*",
        "*.{html,xml,ico,txt,xml,json}"
    ],
    navigateFallback: "/404.html",
    ignoreUrlParametersMatching: [/./],
    runtimeCaching: [{
        urlPattern: /^https:\/\/fonts\./,
        handler: "cacheFirst"
    },
    {
        urlPattern: /^https:\/\/code\.jquery\.com/,
        handler: "cacheFirst"
    },
    {
        urlPattern: /^https:\/\/maxcdn\.bootstrapcdn\.com/,
        handler: "cacheFirst"
    },
    {
        urlPattern: /^https:\/\/cdnjs\.cloudflare\.com/,
        handler: "cacheFirst"
    }]
};
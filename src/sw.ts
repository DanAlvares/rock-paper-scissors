const version = 1;
const cacheName = `rps-static-${version}`;
const assetsToCache = [
    '/',
    '/index.html',
    '/index.css',
    '/index.js',
    '/favicon.ico',
    '/logo.jpg',
    '/rpsls.png',
    'images/icons/icon-72x72.png',
    'images/icons/icon-96x96.png',
    'images/icons/icon-128x128.png',
    'images/icons/icon-144x144.png',
    'images/icons/icon-152x152.png',
    'images/icons/icon-192x192.png',
    'images/icons/icon-384x384.png',
    'images/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    caches.open(cacheName).then(cache => {
        cache.addAll(assetsToCache)
    })
});

self.addEventListener('activate', event => { });

self.addEventListener('fetch', event => { });

async function cacheFiles(forceReload = false) {
    const cache = await caches.match(cacheName);
    // return Promise.all(precacheUrls.map(asny))
}
// if ('serviceWorker' in navigator) {
//     logger('has SW');
//     navigator.serviceWorker.register('../sw.js')
//         .then(reg => {
//             logger(reg);
//         })
//         .catch(err => console.log('Service Worker not registered!', err))
// }
const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
    '/Lab1-2/',
    '/Lab1-2/index.html',
    '/Lab1-2/style.css',
    '/Lab1-2/app.js',
    '/Lab1-2/manifest.json',
    '/Lab1-2/icons/icon-128.png',
    '/Lab1-2/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
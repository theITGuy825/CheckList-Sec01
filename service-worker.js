const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
 '/CheckList-Sec01/',
 '/CheckList-Sec01/index.html',
 '/CheckList-Sec01/style.css',
 '/CheckList-Sec01/app.js',
 '/CheckList-Sec01/firebase-config.js',
 '/CheckList-Sec01/manifest.json',
 '/CheckList-Sec01/icons/icon-128.png',
 '/CheckList-Sec01/icons/icon-512.png'
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
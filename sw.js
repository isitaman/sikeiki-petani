const CACHE_NAME = 'sikeiki-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/favicon-96x96.png',
  '/favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

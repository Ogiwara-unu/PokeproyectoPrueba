self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('poke-cache').then(cache => {
            return cache.addAll([
                './frontend/public/',
                './frontend/public/index.html',
                './frontend/public/styles.css',
                './frontend/public/app.js',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

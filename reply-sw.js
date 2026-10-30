/* Offline shell for the reply pad. The pad is most useful in a chat, which is
   often exactly when the bundle is finished, so it must open without data. */

const CACHE = "reply-pad-v1";

const SHELL = [
    "./reply-pad.html",
    "./manifest-reply.json",
    "./assets/reply-pad.js",
    "./assets/reply-pad-page.js",
    "./assets/qr-studio.svg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;
    if (request.method !== "GET") return;

    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;
            return fetch(request).then(response => {
                if (response && response.ok && new URL(request.url).origin === location.origin) {
                    const copy = response.clone();
                    caches.open(CACHE).then(cache => cache.put(request, copy));
                }
                return response;
            }).catch(() => caches.match("./reply-pad.html"));
        })
    );
});

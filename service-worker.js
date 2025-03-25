self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("quran-cache").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/manifest.json",
        "/icon-192x192.png",
        "/icon-512x512.png"
      ]).catch(err => console.error("Cache-ga qo'shishda xatolik:", err));
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(err => console.error("Fetch xatolik:", err))
  );
});

self.addEventListener("install", (e) => {
  console.log("Service Worker installé");
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker activé");
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

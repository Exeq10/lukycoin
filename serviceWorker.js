const nombreCache = "Cl-v1";
const archivos = [
  "/",
  "/style.css",
  "/cara.jpg",
  "/numeroMoneda.jpg",
  "/app.js",
  "/scripts.js",
];

self.addEventListener("install", (e) => {
  console.log(e);

  e.waitUntil(caches.open(nombreCache).then((cache) => cache.addAll(archivos)));
});

self.addEventListener("activate", (e) => {
  console.log(e);
});

self.addEventListener("fetch", (e) => {
  console.log(e);

  caches.match(e.request).then((resp) => {
    return resp;
  });
});

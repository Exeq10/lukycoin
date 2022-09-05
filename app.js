if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(console.log("se registro correctamente"))
    .catch((err) => console.log("fallo la instalacion ", err));
} else {
  console.log("No soporta serviceWorker");
}

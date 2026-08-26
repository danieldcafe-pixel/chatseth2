// Service worker mínimo: no cachea nada, solo hace que Chrome/Android
// reconozca la página como una app instalable (para que abra sin la
// barra de herramientas al lanzarla desde la pantalla de inicio).
self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  self.clients.claim();
});

self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});

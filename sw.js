const CACHE_NAME = 'meu-treino-v3';
const ASSETS = [
  './',
  './index.html',
  './style.css?v=3',
  './app.js?v=3',
  './manifest.json',
  './icon.svg',
  './images/supino.png',
  './images/chest_press.png',
  './images/voador.png',
  './images/shoulder_press.png',
  './images/lateral_raise.png',
  './images/pulley_triceps.png',
  './images/triceps_corda.png',
  './images/triceps_maquina.png',
  './images/lat_pulldown.png',
  './images/remada_maquina.png',
  './images/seated_row_barra.png',
  './images/iso_lateral_pulldown.png',
  './images/t_bar_row.png',
  './images/costas_voador.png',
  './images/high_pulley_ombros.png',
  './images/biceps_barra.png',
  './images/hammer_curl.png',
  './images/leg_press.png',
  './images/leg_extension.png',
  './images/leg_curl.png',
  './images/abductor.png',
  './images/calf_raise.png',
  './images/abs_machine.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => console.log('Asset cache warning:', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network-first com fallback para cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(e.request).then((cachedResponse) => {
          return cachedResponse || caches.match('./index.html');
        });
      })
  );
});

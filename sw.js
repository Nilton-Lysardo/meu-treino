const CACHE_NAME = 'meu-treino-v5';
const ASSETS = [
  './',
  './index.html',
  './style.css?v=5',
  './app.js?v=5',
  './manifest.json',
  './icon.svg',
  './images/abducao_horizontal_ombro_polia.png',
  './images/abductor.png',
  './images/abs_machine.png',
  './images/biceps_barra.png',
  './images/calf_raise.png',
  './images/chest_press.png',
  './images/costas_voador.png',
  './images/crucifixo_invertido.png',
  './images/elevacao_frontal_polia.png',
  './images/hammer_curl.png',
  './images/high_pulley_ombros.png',
  './images/iso_lateral_pulldown.png',
  './images/lateral_raise.png',
  './images/lat_pulldown.png',
  './images/leg_curl.png',
  './images/leg_extension.png',
  './images/leg_press.png',
  './images/pulley_articulado.png',
  './images/pulley_triceps.png',
  './images/puxada_frontal.png',
  './images/puxada_graviton.png',
  './images/remada_maquina.png',
  './images/rosca_barra_w.png',
  './images/rosca_concentrada.png',
  './images/rosca_corda_polia.png',
  './images/rosca_inclinada.png',
  './images/seated_row_barra.png',
  './images/shoulder_press.png',
  './images/supino.png',
  './images/triceps_corda.png',
  './images/triceps_maquina.png',
  './images/t_bar_row.png',
  './images/voador.png',
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
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(e.request);
      })
  );
});

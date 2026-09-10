/* Service worker CIELBLEU — stratégie « réseau d'abord » pour que l'app installée
   (icône écran d'accueil) affiche TOUJOURS la dernière version quand elle est en ligne,
   et ne serve le cache qu'en secours (hors-ligne). */
const CACHE = 'cielbleu-v1';

self.addEventListener('install', (e) => {
  // Activer immédiatement la nouvelle version du SW
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    // Supprimer les anciens caches
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function networkFirst(req) {
  try {
    const fresh = await fetch(req);
    const cache = await caches.open(CACHE);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await caches.match(req);
    return cached || caches.match('./') || Response.error();
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req);
  const network = fetch(req)
    .then((res) => { if (res && res.status === 200) cache.put(req, res.clone()); return res; })
    .catch(() => cached);
  return cached || network;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // ne pas toucher Google Fonts & co
  // Laisser le navigateur gérer les médias (requêtes Range vidéo) sans interception
  if (/\.(mp4|mov|webm|m4v|mp3|wav)$/i.test(url.pathname)) return;
  // Pages HTML : réseau d'abord (dernière version garantie si en ligne)
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(networkFirst(req));
    return;
  }
  // Autres ressources (CSS, JS, images) : cache immédiat + mise à jour en arrière-plan
  e.respondWith(staleWhileRevalidate(req));
});

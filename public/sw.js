const CACHE_NAME = 'koala-spa-v1'
const PRECACHE_URLS = ['/', '/index.html', '/manifest.json', '/favicon.svg', '/apple-touch-icon.svg']

function isHttpRequest(request) {
  const url = request.url
  return url.startsWith('http://') || url.startsWith('https://')
}

async function safeCachePut(cache, request, response) {
  if (!isHttpRequest(request)) return

  try {
    await cache.put(request, response)
  } catch {
    // Ignore unsupported schemes (e.g. chrome-extension://) and other cache errors.
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  if (!isHttpRequest(event.request)) return

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached

      return fetch(event.request)
        .then((response) => {
          if (!response.ok || response.type === 'opaque' || !isHttpRequest(event.request)) {
            return response
          }

          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => safeCachePut(cache, event.request, copy))
          return response
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html')
          }
          return undefined
        })
    }),
  )
})

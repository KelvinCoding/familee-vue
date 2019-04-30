importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/089c84dbf6cbee8c32f6.js",
    "revision": "2993bae197363b193e5a50d5caf11717"
  },
  {
    "url": "/_nuxt/21e070e9d8bdd946d70f.js",
    "revision": "0e1cd46e81e6e42e0b06c983ec4d7ff0"
  },
  {
    "url": "/_nuxt/454c4a7a05877814c9f1.js",
    "revision": "c872931ad92b9cda89208265757bf5c9"
  },
  {
    "url": "/_nuxt/5c7878715296ea236023.js",
    "revision": "71600e061272ed0e89d412eeb14b0655"
  },
  {
    "url": "/_nuxt/77ec3e6e02a5323c5294.js",
    "revision": "45097ad0a30538186cdd76ba153e1542"
  },
  {
    "url": "/_nuxt/a5e96bce6795b6f8e8a1.js",
    "revision": "899604e052675972f8876748004b8abc"
  },
  {
    "url": "/_nuxt/c5cb30f00dad1597e111.js",
    "revision": "3ea61310dc36c3fe4c98a47df4e158b7"
  },
  {
    "url": "/_nuxt/e29211481811ae260ead.js",
    "revision": "c33764c83004146d065d3467d1611b41"
  },
  {
    "url": "/_nuxt/e2b240a807863d3d10a7.js",
    "revision": "9914c33ef6ef40d736742a68822ec354"
  }
], {
  "cacheId": "Familee",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

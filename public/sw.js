// Service Worker for PlayMaster Directory
const CACHE_NAME = 'playmaster-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network-first pattern or bypass to ensure dynamic admin changes load instantly
});

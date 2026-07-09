// Service Worker for PlayMaster Directory
const CACHE_NAME = 'playmaster-cache-v1';

// Monetag Service Worker Configuration
self.options = {
  domain: "5gvci.com",
  zoneId: 11262428
};
importScripts("https://5gvci.com/act/files/service-worker.min.js?r=sw");

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network-first pattern or bypass to ensure dynamic admin changes load instantly
});

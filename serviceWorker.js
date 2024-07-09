/* eslint no-undef: 0 */

const cacheName = 'tuner-site-v1';
const precachedResources = [
  '/',
  '/index.html',
  '/main.css',
  '/main.js',
  '/images/windows11/SmallTile.scale-100.png',
  '/images/windows11/SmallTile.scale-125.png',
  '/images/windows11/SmallTile.scale-150.png',
  '/images/windows11/SmallTile.scale-200.png',
  '/images/windows11/SmallTile.scale-400.png',
  '/images/windows11/Square150x150Logo.scale-100.png',
  '/images/windows11/Square150x150Logo.scale-125.png',
  '/images/windows11/Square150x150Logo.scale-150.png',
  '/images/windows11/Square150x150Logo.scale-200.png',
  '/images/windows11/Square150x150Logo.scale-400.png',
  '/images/windows11/Wide310x150Logo.scale-100.png',
  '/images/windows11/Wide310x150Logo.scale-125.png',
  '/images/windows11/Wide310x150Logo.scale-150.png',
  '/images/windows11/Wide310x150Logo.scale-200.png',
  '/images/windows11/Wide310x150Logo.scale-400.png',
  '/images/windows11/LargeTile.scale-100.png',
  '/images/windows11/LargeTile.scale-125.png',
  '/images/windows11/LargeTile.scale-150.png',
  '/images/windows11/LargeTile.scale-200.png',
  '/images/windows11/LargeTile.scale-400.png',
  '/images/windows11/Square44x44Logo.scale-100.png',
  '/images/windows11/Square44x44Logo.scale-125.png',
  '/images/windows11/Square44x44Logo.scale-150.png',
  '/images/windows11/Square44x44Logo.scale-200.png',
  '/images/windows11/Square44x44Logo.scale-400.png',
  '/images/windows11/StoreLogo.scale-100.png',
  '/images/windows11/StoreLogo.scale-125.png',
  '/images/windows11/StoreLogo.scale-150.png',
  '/images/windows11/StoreLogo.scale-200.png',
  '/images/windows11/StoreLogo.scale-400.png',
  '/images/windows11/SplashScreen.scale-100.png',
  '/images/windows11/SplashScreen.scale-125.png',
  '/images/windows11/SplashScreen.scale-150.png',
  '/images/windows11/SplashScreen.scale-200.png',
  '/images/windows11/SplashScreen.scale-400.png',
  '/images/windows11/Square44x44Logo.targetsize-16.png',
  '/images/windows11/Square44x44Logo.targetsize-20.png',
  '/images/windows11/Square44x44Logo.targetsize-24.png',
  '/images/windows11/Square44x44Logo.targetsize-30.png',
  '/images/windows11/Square44x44Logo.targetsize-32.png',
  '/images/windows11/Square44x44Logo.targetsize-36.png',
  '/images/windows11/Square44x44Logo.targetsize-40.png',
  '/images/windows11/Square44x44Logo.targetsize-44.png',
  '/images/windows11/Square44x44Logo.targetsize-48.png',
  '/images/windows11/Square44x44Logo.targetsize-60.png',
  '/images/windows11/Square44x44Logo.targetsize-64.png',
  '/images/windows11/Square44x44Logo.targetsize-72.png',
  '/images/windows11/Square44x44Logo.targetsize-80.png',
  '/images/windows11/Square44x44Logo.targetsize-96.png',
  '/images/windows11/Square44x44Logo.targetsize-256.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
  '/images/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
  '/images/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
  '/images/android/android-launchericon-512-512.png',
  '/images/android/android-launchericon-192-192.png',
  '/images/android/android-launchericon-144-144.png',
  '/images/android/android-launchericon-96-96.png',
  '/images/android/android-launchericon-72-72.png',
  '/images/android/android-launchericon-48-48.png',
  '/images/ios/16.png',
  '/images/ios/20.png',
  '/images/ios/29.png',
  '/images/ios/32.png',
  '/images/ios/40.png',
  '/images/ios/50.png',
  '/images/ios/57.png',
  '/images/ios/58.png',
  '/images/ios/60.png',
  '/images/ios/64.png',
  '/images/ios/72.png',
  '/images/ios/76.png',
  '/images/ios/80.png',
  '/images/ios/87.png',
  '/images/ios/100.png',
  '/images/ios/114.png',
  '/images/ios/120.png',
  '/images/ios/128.png',
  '/images/ios/144.png',
  '/images/ios/152.png',
  '/images/ios/167.png',
  '/images/ios/180.png',
  '/images/ios/192.png',
  '/images/ios/256.png',
  '/images/ios/512.png',
  '/images/ios/1024.png',
];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

function isCacheable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith('.json');
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});


/* eslint-disable */

var version = '0.0.2';
var coreCache = 'core-' + version;

var cacheIDs = [coreCache];

// Font files
var coreFiles = [
    './fonts/ibm-plex-mono-600italic.woff2',
    './fonts/ibm-plex-mono-600italic.woff',
    './fonts/ibm-plex-serif-regular.woff2',
    './fonts/ibm-plex-serif-regular.woff',
    './offline.html',
    './css/main.css',
    './js/main.js',
    './images/avatar.svg'
];

// On install, cache some stuff
self.addEventListener('install', function (event) {
    // Activate immediately
    self.skipWaiting();

    // Cache away!
    event.waitUntil(caches.open(coreCache).then(function (cache) {
        coreFiles.forEach(function (file) {
            cache.add(new Request(file));
        });

        return;
    }));
});

// listen for requests
self.addEventListener('fetch', function (event) {
    // Get the request
    var request = event.request;

    // Bug fix
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }

    // HTML
    if (request.headers.get('Accept').includes('text/html')) {
        event.respondWith(
            fetch(request).then(function (response) {
                return response;
            }).catch(function (error) {
                return caches.match('offline.html');
            })
        );
    }

    // Offline-first
    if (request.url.includes('images/avatar.svg') || request.url.includes('ibm-plex-') || request.url.includes('css/main.css') || request.url.includes('js/main.js')) {
        event.respondWith(
            caches.match(request).then(function (response) {
                return response || fetch(request).then(function (response) {
                    // Return the requested file
                    return response;
                });
            })
        );
    }
});

// On version update, remove old cached files
self.addEventListener('activate', function (event) {
    // Activate right away
    self.skipWaiting();

    // Cache stuff
    event.waitUntil(caches.keys().then(function (keys) {
        return Promise.all(keys.filter(function (key) {
            return !cacheIDs.includes(key);
        }).map(function (key) {
            return caches.delete(key);
        }));
    }).then(function () {
        return self.clients.claim();
    }));
});

/* eslint-enable */

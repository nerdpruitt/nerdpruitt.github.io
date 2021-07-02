/**
 * Tip of the hat to the awesome set of articles on Service Workers
 * found at https://gomakethings.com/articles/
 */

/* eslint-disable */

var staticVersion = '0.0.8';
var typekitVersion = '0.0.1';

var staticFileCache = 'core-' + staticVersion;
var typekitCache = 'typekit-' + typekitVersion;

var cacheIDs = [staticFileCache, typekitCache];

var coreFiles = [
    './offline/index.html',
    './assets/css/home.css' + '?v=' + staticVersion,
    './assets/css/main.css' + '?v=' + staticVersion,
    './assets/js/main.js' + '?v=' + staticVersion,
    './images/profile.svg'
];

// On install, cache some stuff
self.addEventListener('install', function (event) {
    // Activate immediately
    self.skipWaiting();

    // Cache away!
    event.waitUntil(caches.open(staticFileCache).then(function (cache) {
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

    var requestURL = new URL(request.url);

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
                return caches.match('./offline/index.html');
            })
        );
    }

    // Offline-first
    if (request.url.includes('.typekit.net') || request.url.includes('images/profile.svg') || request.url.includes('css/main.css') || request.url.includes('js/main.js')) {
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

// knowing what files need to be stored, like html. 
// We don't need to store post1 - not part of application shell. 
// User may not use it
// How to store files in the cache

const filesToCache = [
    'index.html',
    'offline.html',
    '404.html',
    'style.css',
    'img1.png'
];

const staticCacheName = 'our-second-cache';

self.addEventListener('install', event => {
    console.log('attempting to install service worker and cache static assets')
    event.waitUntil(
        // ensures everything captures inside executes correct, if one doesn't, all fails
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache); // adds files above to cache
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    // custom response to that request, failing back stategy, 
    // first check cache for resource, then send request to network
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                console.log('Found', event.request.url, ' in cache');
                return response;
            }
            console.log('network request for', event.request.url);
            return fetch(event.request)
                .then(response => {
                    if (response.status === 404) {
                        return caches.match('404.html');
                    }
                    return caches.open(staticCacheName)
                    .then(cache => {
                        cache.put(event.request.url, response.clone());
                        return response; 
                    })
                })
        })
        .catch(err => {
            console.error(err);
            return caches.match('offline.html');
        })
    )
})

self.addEventListener('activate', event => {
    console.log('activating a new service woker');

    const cacheWhiteList = [staticCacheName];

    event.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheNames => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cachename);
                    }
                })
            )
        })
    )
})
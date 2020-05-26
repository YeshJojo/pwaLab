const assets = [
	'/',
	'index.html',
	'css/materialize.css',
	'css/style.css',
	'js/style.js',
	'js/materialize.js',
	'images/back.jpg',
	'images/icon256.png',
	'images/icon512.png',
	'images/man.png',
]
const staticCacheName = 'static-cache';

self.addEventListener('install', event => {
	console.log("installing cache assets");
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache =>{
			return cache.addAll(assets);
		})
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if(response){
                return response;
			}
			console.log('network request for ',event.request.url);
			return fetch(event.request)
			.then(response => {
				return caches.open(staticCacheName)
				.then(cache => {
					cache.put(event.request.url, response.clone());
					return response;
				})
			})
		})
		.catch(err => {
			console.log(err);
		})
	)
})
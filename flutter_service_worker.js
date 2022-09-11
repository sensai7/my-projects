'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "df73e2edce43a657c2d26a3db8c5d922",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/alz1.png": "41dc9a4020a17223e508a49de4f44033",
"assets/images/alz2.png": "066791c4412c1e099bbb2f933823a985",
"assets/images/alz3.png": "8287263313f52cc14e798790f2a5be37",
"assets/images/avatar.png": "78e90d34b7b528c56af0d396a477d86e",
"assets/images/baito.png": "8b0e4933e90b1d742628aa42d75154c3",
"assets/images/beat1.jpg": "5360ec67a84a0fd189444b9fb7d72aaa",
"assets/images/beat2.jpg": "8ccbc3b11ebf6bef39058c1ce55b5038",
"assets/images/ccmc1.jpg": "01166765774e92059f763cf01171b069",
"assets/images/ccmc2.jpg": "577f0938b5427f1bcbbdeaacbfddfacf",
"assets/images/coviddimred.png": "5dad46d3f316b9942899e79893a65eeb",
"assets/images/discord.png": "f2d26cae2af06d2772a01217bd95a7b8",
"assets/images/dummy.jpg": "17505a71b408e6f42b86de2309f64768",
"assets/images/GitHub-Mark.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/images/guiparser.png": "cd65e90245c95162850ba6b81b577788",
"assets/images/ko-fi.png": "8eaba1332a92cf38c8f2e9a4121bbe97",
"assets/images/mail.png": "1526884e77cf35e3f998d14bd784957e",
"assets/images/mpml1.png": "d13066a2a97e27d314c8cce631cd9a9a",
"assets/images/mpml2.png": "11a4660d0a4e20a90329f949512a4f74",
"assets/images/noodcalc1.jpg": "9c8069ba28b11c557b979cac5f2ef8bf",
"assets/images/noodcalc2.jpg": "5560ea4293d1741973db9b0dc746aa50",
"assets/images/pistachio1.png": "5574e1d9fa1eb83242ab611d9671f003",
"assets/images/pistachio2.png": "1bb3822cff2b832bb3cf7fce8356bd9c",
"assets/images/retouchclash.png": "72fcd9bb76367ba1073ae35d8b77ce50",
"assets/images/screentonetool.png": "486f0c2d6cf4765b4cd6f1aef7d36d95",
"assets/images/soundcloud.png": "211c34e27e845b3cf87aa77a7776a5ae",
"assets/images/text2layer.jpg": "66a297d0ca1871ea961f695272492f6a",
"assets/images/text2layer.png": "158920676f186488b29c9d725295f780",
"assets/images/textframer.jpg": "43c029ce3c4de9dcc666d950e3795a67",
"assets/images/textframer.png": "8a6f07f6e95abcd978aac03b5d2bdc53",
"assets/images/tumor.png": "30677f796228fbadeda08e241dc8c302",
"assets/images/volcamod.jpg": "dba4785dd1bfac129c57331891c997d6",
"assets/images/zoiacheat.png": "ffa5fb7eb1f0ce04b8bc429491d5cbb2",
"assets/NOTICES": "6a60b9409a8a2a658d1f405d2b732e5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "604264c0f0c4d29759e8f780c0c02a83",
"/": "604264c0f0c4d29759e8f780c0c02a83",
"main.dart.js": "45fb1afa7582dfab8737bd52f23055fc",
"manifest.json": "a9394ce9103fe5a4d8ec39278d2f1fb4",
"version.json": "5643964ff6d0f98106adbdc1e2d7ed75"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

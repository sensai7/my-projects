'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4b05e822d4abe2f591039d7b2eff4eef",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/alz1.png": "41dc9a4020a17223e508a49de4f44033",
"assets/images/alz2.png": "066791c4412c1e099bbb2f933823a985",
"assets/images/alz3.png": "8287263313f52cc14e798790f2a5be37",
"assets/images/avatar.png": "78e90d34b7b528c56af0d396a477d86e",
"assets/images/baito.png": "8b0e4933e90b1d742628aa42d75154c3",
"assets/images/beat1.jpg": "5360ec67a84a0fd189444b9fb7d72aaa",
"assets/images/beat2.jpg": "8ccbc3b11ebf6bef39058c1ce55b5038",
"assets/images/books/Book_1.jpg": "1d028011a4b1b1f9e9526c5c6ae914eb",
"assets/images/books/Book_10.jpg": "be4cee58b951b0e028e976bdb7bf0c89",
"assets/images/books/Book_11.jpg": "e7e0009df7b4a34e1232226228982980",
"assets/images/books/Book_12.jpg": "4b25ef79f63c4e7d77680db0f7ace798",
"assets/images/books/Book_13.jpg": "2323c2282645bfbc697806a115195db1",
"assets/images/books/Book_14.jpg": "181b5382d60768fc444866268cf87178",
"assets/images/books/Book_15.jpg": "73327a492361f8f63c706fba648d3112",
"assets/images/books/Book_16.jpg": "3b3c1a964e928351c592779191dbafb9",
"assets/images/books/Book_17.jpg": "272fb7a15c9acc4f45f7e520b7386cea",
"assets/images/books/Book_18.jpg": "ea85ac915bc6a21eab6e13829a7cf135",
"assets/images/books/Book_2.jpg": "ec5f816f7c957fada070abf5c16c84e0",
"assets/images/books/Book_3.jpg": "3dab9d9340c2bda94fb68739ccba28c5",
"assets/images/books/Book_4.jpg": "608cbd97d0063907615143ec232ca556",
"assets/images/books/Book_5.jpg": "724d6a564e22b917022a1e732e57f42f",
"assets/images/books/Book_6.jpg": "716d1fe5b91f2b6b34cacc10be836bf4",
"assets/images/books/Book_7.jpg": "26814c59640a63bb69651b9e180dcd51",
"assets/images/books/Book_8.jpg": "7bb5dd912ee956ed4eee2822c5934a3b",
"assets/images/books/Book_9.jpg": "441b4e42f418c668e0503f818d28d639",
"assets/images/ccmc1.jpg": "01166765774e92059f763cf01171b069",
"assets/images/ccmc2.jpg": "577f0938b5427f1bcbbdeaacbfddfacf",
"assets/images/coviddimred.png": "5dad46d3f316b9942899e79893a65eeb",
"assets/images/discord.png": "f2d26cae2af06d2772a01217bd95a7b8",
"assets/images/doujin/akagi1.jpg": "7b559af77c017c49ba4e7c18e4cca051",
"assets/images/doujin/akagi2.jpg": "5a6128c55680f3b7c168dbd2fe89523b",
"assets/images/doujin/am1.jpg": "6396a091bffc8d281b5317969c596cc1",
"assets/images/doujin/am10.jpg": "c133af5d064ca266aa78b38da31cc211",
"assets/images/doujin/am11.jpg": "dfba11975dc81c3c863cab4019ac6ae7",
"assets/images/doujin/am2.jpg": "01aca59fef402bfaf598b313cc7ea717",
"assets/images/doujin/am3.jpg": "61e821fddcf61ef42c4e428ab30a58eb",
"assets/images/doujin/am4.jpg": "665d046419cdc17bfb8caa71729645de",
"assets/images/doujin/am5.jpg": "722a4d10da1adb2f1accc66cb594ecfb",
"assets/images/doujin/am6.jpg": "298d0a8f0f847e641c6428bcfb63f293",
"assets/images/doujin/am7.jpg": "5e0523f16fef63ee94b62d027824b812",
"assets/images/doujin/am8.jpg": "5625e7dd3a33f5fd9ca9cbfef8f5ac9a",
"assets/images/doujin/am9.jpg": "e58079939ef5a582d124ed40242ae54e",
"assets/images/doujin/asanagi1.jpg": "b86642bb7be80258d11506505aa8fb25",
"assets/images/doujin/asanagi2.jpg": "7041c2a5d516d4801f2564f70fdac1eb",
"assets/images/doujin/asanagi3.jpg": "fb130a8947b156759a76be5becbee889",
"assets/images/doujin/asanagi4.jpg": "78cf4fa5cfdd66b4ba1ba9fe4f325c16",
"assets/images/doujin/elf.jpg": "c87cfa853473deca356fa8484f03b68d",
"assets/images/doujin/futa.jpg": "7fc0518ac44b43d8bfd1183b72fe4e64",
"assets/images/doujin/michiking1.jpg": "63242eca065b454aa29a35269b72d45b",
"assets/images/doujin/michiking2.jpg": "79f1b532608a1ba395ddff1824fde2a8",
"assets/images/doujin/michiking3.jpg": "55342af74f2a50f280ed20b921b1f06f",
"assets/images/doujin/michiking4.jpg": "c12cef288a8850920475694ac0426f2f",
"assets/images/doujin/michiking5.jpg": "06935eb06885ff5cfbac619356495a31",
"assets/images/doujin/michiking6.jpg": "83bc3cfa7fead40c01c15ffed32beb2d",
"assets/images/doujin/tsf.jpg": "c129285cb15c3dbdf57c5a31fde763f4",
"assets/images/dummy.jpg": "17505a71b408e6f42b86de2309f64768",
"assets/images/GitHub-Mark.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/images/guiparser.png": "cd65e90245c95162850ba6b81b577788",
"assets/images/kanji-shadow.png": "27fef77ea4e9f6ccb4dee7b4dc168571",
"assets/images/ko-fi.png": "8eaba1332a92cf38c8f2e9a4121bbe97",
"assets/images/mail.png": "1526884e77cf35e3f998d14bd784957e",
"assets/images/mpml1.png": "d13066a2a97e27d314c8cce631cd9a9a",
"assets/images/mpml2.png": "11a4660d0a4e20a90329f949512a4f74",
"assets/images/noodcalc1.jpg": "9c8069ba28b11c557b979cac5f2ef8bf",
"assets/images/noodcalc2.jpg": "5560ea4293d1741973db9b0dc746aa50",
"assets/images/other/chastityzero.png": "1d6b70085af667438b0dff9279b48ee1",
"assets/images/other/Full-course%2520Dinner%2520for%2520Vampire.png": "0bdd727988f73133e384126960fc76b4",
"assets/images/other/houseoffivelusts.png": "e7cbfa0243937c86788bad0e54c08a05",
"assets/images/other/hs1.jpg": "a18ac840488516744b372e3cfff79ec8",
"assets/images/other/hs2.jpg": "7ab43dab69b4a8a683fa0dd2efb9fc07",
"assets/images/other/kanojox3.png": "e1b4f6ed83684ffcea48be98c3b2ed45",
"assets/images/other/sweetlady.png": "2e4ad3955010dec5d9edac155f76f98f",
"assets/images/other/teaceremonyfordummies.png": "084ebab876ef0acef3f0fcc8f09fa2ca",
"assets/images/other/vampirevixen.png": "5ecd69f768553787e0c866610aa14943",
"assets/images/other/wifeswapdiaries.png": "80ef94ce5185756882ee32f7234d70ab",
"assets/images/pistachio1.png": "5574e1d9fa1eb83242ab611d9671f003",
"assets/images/pistachio2.png": "1bb3822cff2b832bb3cf7fce8356bd9c",
"assets/images/retouchclash.png": "72fcd9bb76367ba1073ae35d8b77ce50",
"assets/images/screentonetool.png": "486f0c2d6cf4765b4cd6f1aef7d36d95",
"assets/images/secondary/Minor_1.jpg": "9a5a5084dd31486a3ea2cbc16d0c44a5",
"assets/images/secondary/Minor_2.jpg": "9fcb38ceef88e7d14e77ca600dfa2ecb",
"assets/images/secondary/Minor_3.jpg": "ecd9730c6b20aa5a64732db5a9dbb532",
"assets/images/secondary/Minor_4.jpg": "fd849fefd09d222fa50338bb63817208",
"assets/images/secondary/Minor_5.jpg": "772f55b16e87ab126fb4ccc01e67db27",
"assets/images/secondary/Minor_6.jpg": "7f1f3e24c30ef44c448900666127314b",
"assets/images/secondary/Minor_7.jpg": "3b68dd9a5e6bb81202a898eeb131df8e",
"assets/images/secondary/Minor_8.jpg": "0bdbb144aa027f0b918ac062eed54725",
"assets/images/soundcloud.png": "211c34e27e845b3cf87aa77a7776a5ae",
"assets/images/Spin-1s-200px.gif": "b3f2457d983b1e424e2cb3c044ed755e",
"assets/images/text2layer.jpg": "66a297d0ca1871ea961f695272492f6a",
"assets/images/text2layer.png": "158920676f186488b29c9d725295f780",
"assets/images/textframer.jpg": "43c029ce3c4de9dcc666d950e3795a67",
"assets/images/textframer.png": "8a6f07f6e95abcd978aac03b5d2bdc53",
"assets/images/tumor.png": "30677f796228fbadeda08e241dc8c302",
"assets/images/volcamod.jpg": "dba4785dd1bfac129c57331891c997d6",
"assets/images/zoiacheat.png": "ffa5fb7eb1f0ce04b8bc429491d5cbb2",
"assets/NOTICES": "3f288ff9fa3219d705fe3b59d41ee6b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d9c23b31c3439c1b8c7cfdd6682b38cc",
"/": "d9c23b31c3439c1b8c7cfdd6682b38cc",
"main.dart.js": "ed3621de1f127b3a24badf0032754a4d",
"manifest.json": "a9394ce9103fe5a4d8ec39278d2f1fb4",
"version.json": "5643964ff6d0f98106adbdc1e2d7ed75"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>a(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Vne-lfosGd3wbmXtBXLZe/_buildManifest.js",revision:"83306867d1a873f58499d893281286d2"},{url:"/_next/static/Vne-lfosGd3wbmXtBXLZe/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Vne-lfosGd3wbmXtBXLZe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/667-49c8e7fa162a3b9a.js",revision:"49c8e7fa162a3b9a"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/framework-1f10003e17636e37.js",revision:"1f10003e17636e37"},{url:"/_next/static/chunks/main-534ec2e0afa0cb10.js",revision:"534ec2e0afa0cb10"},{url:"/_next/static/chunks/pages/404-86be7a6ef09f91dc.js",revision:"86be7a6ef09f91dc"},{url:"/_next/static/chunks/pages/_app-36cb989cc4d85c5c.js",revision:"36cb989cc4d85c5c"},{url:"/_next/static/chunks/pages/_error-777a5f0e462a9bdf.js",revision:"777a5f0e462a9bdf"},{url:"/_next/static/chunks/pages/about-119dcafc6a1625fb.js",revision:"119dcafc6a1625fb"},{url:"/_next/static/chunks/pages/dashboard-4aa9b986357e0b7b.js",revision:"4aa9b986357e0b7b"},{url:"/_next/static/chunks/pages/index-6755696b7aad08df.js",revision:"6755696b7aad08df"},{url:"/_next/static/chunks/pages/login-4ffd189069ea9c2c.js",revision:"4ffd189069ea9c2c"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-c86d54458757f04e.js",revision:"c86d54458757f04e"},{url:"/android-chrome-192x192.png",revision:"cf93c4eaa3056597542cf5173425cd8d"},{url:"/android-chrome-512x512.png",revision:"d0b100857f5c2fcc8b8a91e19b1846ca"},{url:"/apple-touch-icon.png",revision:"cf93c4eaa3056597542cf5173425cd8d"},{url:"/assets/images/background_logo.svg",revision:"dff6e85979be2bcfc534c3fee0a5488f"},{url:"/assets/images/logo.svg",revision:"3486915b63728c8ba2a045f691ef2989"},{url:"/favicon-16x16.png",revision:"39985e73cf4fd578d44de4a56d0fef03"},{url:"/favicon-32x32.png",revision:"739bd5ca28a263d782a3d2afb899067c"},{url:"/favicon.ico",revision:"be644e5885069f72b0dc9d34b346c563"},{url:"/firebase-messaging-sw.js",revision:"c04d03fabd20f8dbd7ef7790aaa21a6b"},{url:"/icon-512x512.png",revision:"d0b100857f5c2fcc8b8a91e19b1846ca"},{url:"/icon.png",revision:"cf93c4eaa3056597542cf5173425cd8d"},{url:"/manifest.json",revision:"b57950b65447b2e18df46a7176630431"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>new Response('<meta name="viewport" content="width=device-width"><body style="font-family:sans-serif;text-align:center;padding:40px;color:#3b2210"><h3>Tidak ada koneksi internet</h3><p>Sambungkan internet lalu buka kembali aplikasi.</p></body>',{headers:{'Content-Type':'text/html; charset=utf-8'}})))}});

if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const o=e=>a(e,s),r={module:{uri:s},exports:f,require:o};i[s]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/360-01.jpg",revision:"e330509869960652b44faf05d3ffc2ac"},{url:"/Montserrat-VariableFont.ttf",revision:"b87689f37dfb5c51719210e4d96a34a2"},{url:"/_next/static/YjWmaQqU4ti5J-LRR3gRu/_buildManifest.js",revision:"e2e209dde61b64a21948d58556a5659a"},{url:"/_next/static/YjWmaQqU4ti5J-LRR3gRu/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/main-124a56b4649b538f.js",revision:"124a56b4649b538f"},{url:"/_next/static/chunks/pages/_app-9829803b11e8a256.js",revision:"9829803b11e8a256"},{url:"/_next/static/chunks/pages/_error-238c215263dd9599.js",revision:"238c215263dd9599"},{url:"/_next/static/chunks/pages/index-fcdb75010bef39a5.js",revision:"fcdb75010bef39a5"},{url:"/_next/static/chunks/pages/infinity-world-2704eb19f2e84c28.js",revision:"2704eb19f2e84c28"},{url:"/_next/static/chunks/pages/infinity-world/infinity-blue-fe261131bdeec626.js",revision:"fe261131bdeec626"},{url:"/_next/static/chunks/pages/infinity-world/infinity-sea-9479f7b61acd3f33.js",revision:"9479f7b61acd3f33"},{url:"/_next/static/chunks/pages/infinity-world/infinity-sea/decorated-820e177ea85a2470.js",revision:"820e177ea85a2470"},{url:"/_next/static/chunks/pages/infinity-world/infinity-sea/decorated/%5Bid%5D-95f211c5c50011df.js",revision:"95f211c5c50011df"},{url:"/_next/static/chunks/pages/infinity-world/mapa-de-depositos-9b90861647e6f93a.js",revision:"9b90861647e6f93a"},{url:"/_next/static/chunks/pages/infinity-world/mapa-de-depositos/tabela-de-vendas-aefd4bf056bd68f8.js",revision:"aefd4bf056bd68f8"},{url:"/_next/static/chunks/pages/infinity-world/mapa-de-vagas-3247e02291244926.js",revision:"3247e02291244926"},{url:"/_next/static/chunks/pages/infinity-world/tabela-de-vendas-d7fc4672dbe914b8.js",revision:"d7fc4672dbe914b8"},{url:"/_next/static/chunks/pages/infinity-world/vistas-5e239e32f96c435d.js",revision:"5e239e32f96c435d"},{url:"/_next/static/chunks/pages/informacoes-gerais-8a931b2c6cc60d38.js",revision:"8a931b2c6cc60d38"},{url:"/_next/static/chunks/pages/informacoes-gerais/fachadas-9742cfee35aa81bb.js",revision:"9742cfee35aa81bb"},{url:"/_next/static/chunks/pages/informacoes-gerais/ficha-tecnica-d9cd0489090374af.js",revision:"d9cd0489090374af"},{url:"/_next/static/chunks/pages/informacoes-gerais/o-bairro-06bd6e141fe7f5a5.js",revision:"06bd6e141fe7f5a5"},{url:"/_next/static/chunks/pages/informacoes-gerais/projetistas-65efca4caa461b81.js",revision:"65efca4caa461b81"},{url:"/_next/static/chunks/pages/informacoes-gerais/projetistas/%5Bid%5D-5cd21cc126b948b2.js",revision:"5cd21cc126b948b2"},{url:"/_next/static/chunks/pages/localizacao-475278fdcd652914.js",revision:"475278fdcd652914"},{url:"/_next/static/chunks/pages/localizacao/requalificacao-b241199289367d0a.js",revision:"b241199289367d0a"},{url:"/_next/static/chunks/pages/localizacao/sobre-a-localizacao-7686b9609c196d12.js",revision:"7686b9609c196d12"},{url:"/_next/static/chunks/pages/localizacao/video-requalificacao-b7869a6be1f78546.js",revision:"b7869a6be1f78546"},{url:"/_next/static/chunks/pages/localizacao/vista-360-ac690a472ff3334f.js",revision:"ac690a472ff3334f"},{url:"/_next/static/chunks/pages/login-bafa5e343c0e341f.js",revision:"bafa5e343c0e341f"},{url:"/_next/static/chunks/pages/manifesto-c8270160fe5b0cc8.js",revision:"c8270160fe5b0cc8"},{url:"/_next/static/chunks/pages/manifesto/video-e021d0659997bfc9.js",revision:"e021d0659997bfc9"},{url:"/_next/static/chunks/pages/plantas-ed4b548b33b5f427.js",revision:"ed4b548b33b5f427"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/css/610dd3d66a69bd90.css",revision:"610dd3d66a69bd90"},{url:"/_next/static/css/bcd0a936cfd43554.css",revision:"bcd0a936cfd43554"},{url:"/_next/static/media/510c0385036cae78-s.p.ttf",revision:"b87689f37dfb5c51719210e4d96a34a2"},{url:"/_next/static/media/bg-praia.f0dd5371.png",revision:"8cc169dc78cde01a24f4a27c654ce0a8"},{url:"/_next/static/media/floor-plan-infinity-blue-apartment.4d57ea3b.png",revision:"5d63fa3c7f2b38549f97fb0664175f46"},{url:"/_next/static/media/floor-plan-infinity-blue-lounge.d5cddb8d.png",revision:"dc0fd9e4f0c312441d81c6a1d155282d"},{url:"/_next/static/media/floor-plan-infinity-blue-rooftop.9f0a4f6d.png",revision:"6f50bc4780c67ff35397da883870ef8a"},{url:"/_next/static/media/floor-plan-infinity-world-mapa.5c63361a.png",revision:"b2d5051aaf2548483633c87c58f4b1e6"},{url:"/_next/static/media/floor-plan-infinity-world-tabela-mapa.7245c0eb.png",revision:"1ecb2ab859b1a3fb5104aae10c0dcfe2"},{url:"/_next/static/media/signature.558ce448.png",revision:"5f1adaf3bbfeb21eef8633e5638aefdd"},{url:"/bg-alto-mar.mp4",revision:"9cdd440ee421481a94297dbfd4d32560"},{url:"/bg-aqua-title.jpg",revision:"f555a92e4ca0246cc84b893f8fbf7363"},{url:"/bg-ficha-tecnica.jpg",revision:"0927eb4bcb5c773235119ff1273ba8b0"},{url:"/bg-infinity-blue.png",revision:"902501ba35ad7d296e18aa1f7727f293"},{url:"/bg-infinity-comp.png",revision:"9f7a7dd25b0009ada66abdb91e6ebbd5"},{url:"/bg-infinity.jpg",revision:"ad32b8596fcb094a926541b3ef0a9021"},{url:"/bg-infinty-sea.png",revision:"f75cb30809ba037733a442128b623b12"},{url:"/bg-info.png",revision:"c904493f481881aa97a813c945dab0bc"},{url:"/bg-manifesto.png",revision:"f1255fb4348acc8d2107805feff92a6c"},{url:"/bg-mapa-geral.jpg",revision:"1030948e229f203e3275f9ab8c9c42cb"},{url:"/bg-mar.png",revision:"f415303d7e4775e98d5e778cd376115a"},{url:"/bg-menu.jpg",revision:"5c890b5e018dd28420e70b243d6fc436"},{url:"/bg-opcao.jpg",revision:"690218377cd11f4aebd8c97a9c31adc5"},{url:"/bg-praia.png",revision:"8cc169dc78cde01a24f4a27c654ce0a8"},{url:"/bg-projetistas.jpg",revision:"5e181bce2d4db9dd0308085025772467"},{url:"/bg-sobre-localizacao.jpg",revision:"609bf66a870d5f78169a79ed68b7ff07"},{url:"/blue-circle.svg",revision:"850f56725b64026719fa30847957c2f6"},{url:"/bulding-circle.svg",revision:"2137b922bceaddf681961c4cb4d4a941"},{url:"/carro-eletrico.svg",revision:"0dfdb7756e6eb7880233ddd0d92f7046"},{url:"/casal-cortado.png",revision:"e9aac4570a3f392042a0f0029cb3a87b"},{url:"/casal-dobrado.png",revision:"39ff117c7b28a07e5caf509ea6312790"},{url:"/chuva.svg",revision:"2b78001bf40d5fb255a7c7d034ec8790"},{url:"/circle-text.svg",revision:"9149b66dddb6e20327c3c2a67ee8c40c"},{url:"/conv00.png",revision:"72b84277b9df6416536b76d8db2c80ba"},{url:"/conv01.png",revision:"0f3591f10b45428f3aded0f138c382e4"},{url:"/conv01.svg",revision:"bff984e409200f60ab58d4afd27f7015"},{url:"/conv02.png",revision:"3375f23cdce1cde478486ef48020752d"},{url:"/conv02.svg",revision:"fbe428fe53fe5b5cfe27cc8193ab66fd"},{url:"/conv03.png",revision:"bb0ade9540a7fc489434e7d0a68df417"},{url:"/conv03.svg",revision:"a1f4c9f473361655e12e95e5ded8d76d"},{url:"/conv04.png",revision:"ea25fcc6b6374766aa14eef2125bf4dd"},{url:"/conv04.svg",revision:"18fb0f6c0ec063c52a34e1e91fb0fb50"},{url:"/conv05.png",revision:"0ca9718c7a14036dc1c746281efa2d0b"},{url:"/conv05.svg",revision:"fdbbbc09bb6492352e2fcd9b85954ca8"},{url:"/conv06.png",revision:"a338c93cf0d6f5eed8ba62d4361a99c4"},{url:"/conv06.svg",revision:"be585a86805633b6f4ffb6d0025d88ff"},{url:"/conv07.png",revision:"7e4fe2eabc9f5a386f272245e35cb5f9"},{url:"/conv07.svg",revision:"a74002f66dbf3d757344eee5ee045bf0"},{url:"/conveniencias.png",revision:"bc5fb783cdcfe8c3644f2c2709a61bbd"},{url:"/deposit-g1-blue.png",revision:"3d3affc62ec573f35956fbe41343221e"},{url:"/diamante.svg",revision:"b546d359f1f90fe1e45f5a60e43c32bf"},{url:"/download.svg",revision:"68dac56a5e0b8d9cd4afee58d15ad3fc"},{url:"/drone-tecnologia.png",revision:"082860a14abc895e977823463d489525"},{url:"/fachada-blue.jpg",revision:"d73a4501289163323661e59d9444b7f8"},{url:"/fachada-sea.jpg",revision:"df0b28bba907a3ddeae8d97a55de34c3"},{url:"/favicon/android-chrome-192x192.png",revision:"459dac2113348dfadd8e0a96e4f39dc9"},{url:"/favicon/android-chrome-512x512.png",revision:"1dd09f49a871135445f7bd7946c66676"},{url:"/favicon/apple-touch-icon.png",revision:"7d8281986da8db9c1b5413570ecc1f83"},{url:"/favicon/browserconfig.xml",revision:"765146e15223505546b54d3db36babf3"},{url:"/favicon/favicon-16x16.png",revision:"12b1cab2ce8a716a075f33cffcc9bc97"},{url:"/favicon/favicon-32x32.png",revision:"096850f15c19cf78da22a61a7fc60b53"},{url:"/favicon/favicon.ico",revision:"aaa3368a9b5804c3f3cbd6b6f8e17dcc"},{url:"/favicon/mstile-150x150.png",revision:"fc5bd63ac943de622b000d45404f070c"},{url:"/favicon/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/favicon/site.webmanifest",revision:"6314e7b3f29a9426889c667f0a7c9f3a"},{url:"/fechadura-eletronica.svg",revision:"48d2eaaee09f437d4f2d5db11f584b57"},{url:"/ficha-tecnica01.jpg",revision:"c9218efc036571921f2e251f88c18f28"},{url:"/ficha-tecnica02.jpg",revision:"e9102d7c02fbe7885a0592e92ff2233a"},{url:"/ficha-tecnica03.jpg",revision:"69e7e4048085de5471c88531cb8b8d96"},{url:"/ficha-tecnica04.jpg",revision:"30b5d712a242440c7e75743c63454723"},{url:"/floor-plan-infinity-blue-apartment.png",revision:"5d63fa3c7f2b38549f97fb0664175f46"},{url:"/floor-plan-infinity-blue-apartment.svg",revision:"b0f39c6df97162141a1124bcbcebc4f6"},{url:"/floor-plan-infinity-blue-lounge.png",revision:"dc0fd9e4f0c312441d81c6a1d155282d"},{url:"/floor-plan-infinity-blue-lounge.svg",revision:"f1e7e7e103aa737f3c7496093657b2bb"},{url:"/floor-plan-infinity-blue-pavimento.png",revision:"1b6cd9d1e5cc72c7fa61f40f3411ef6d"},{url:"/floor-plan-infinity-blue-pavimento.svg",revision:"0786a9108abc424c4e2aa378e7e60b31"},{url:"/floor-plan-infinity-blue-rooftop.png",revision:"6f50bc4780c67ff35397da883870ef8a"},{url:"/floor-plan-infinity-blue-rooftop.svg",revision:"8c7892cf51b08fb359a5d5a7b6b38c0e"},{url:"/floor-plan-infinity-sea-apartment.png",revision:"a9c4df2386ecc967275a0349681a59ad"},{url:"/floor-plan-infinity-sea-apartment.svg",revision:"322710d7a6ce84db2ba13cac4fd48d01"},{url:"/floor-plan-infinity-sea-club.png",revision:"f6506bd156734b5f60ab5292af86905c"},{url:"/floor-plan-infinity-sea-club.svg",revision:"91df840528b5773ee48a410d1dfacc2c"},{url:"/floor-plan-infinity-sea-pavimento.png",revision:"20a98b2e05247f4527cd699d26683c14"},{url:"/floor-plan-infinity-sea-pavimento.svg",revision:"35cec7eb364b62502e5e08149acb143a"},{url:"/floor-plan-infinity-world-mapa.png",revision:"b2d5051aaf2548483633c87c58f4b1e6"},{url:"/floor-plan-infinity-world-mapa.svg",revision:"0c23dd81ec55db429d27ad4213838ed7"},{url:"/floor-plan-infinity-world-tabela-mapa.png",revision:"1ecb2ab859b1a3fb5104aae10c0dcfe2"},{url:"/floor-plan-infinity-world-tabela-mapa.svg",revision:"e9163f4fa555a83d1929996207c2bb13"},{url:"/home.mp4",revision:"4f1b2e49540e0a81712d02eea5f93675"},{url:"/icon-close copy 2.svg",revision:"a27c365554018da155538dc4a3fe4161"},{url:"/icon-close-borderless.svg",revision:"0260722cf08799dbc9b23a5bb5e75598"},{url:"/icon-close-filled-dark.svg",revision:"efd5e830fa816bdc8630eb8fdcebd3d4"},{url:"/icon-close-filled.svg",revision:"7809bc6c473d14096da875332c5002b7"},{url:"/icon-close-only.svg",revision:"be14d034bac71c58d7666dcfd3623b52"},{url:"/icon-close.svg",revision:"a27c365554018da155538dc4a3fe4161"},{url:"/icon-fullscreen.svg",revision:"4b7e708b525cf9e830ce84384cd9f683"},{url:"/icon-infinity.svg",revision:"e08ff04e4dd273ee8d5911b5f794d8d7"},{url:"/icon-isolation.png",revision:"b680d1cd5d5e57cb1913fc3e14159cbb"},{url:"/icon-ruler.svg",revision:"9e99a05a9b31f6758255a1a2665a2a07"},{url:"/icon-shopping-bag.svg",revision:"68f68f17ffcba3c374464afe9b93d489"},{url:"/icone-play.svg",revision:"393f7bd423d43a21967e555ef7b90cb8"},{url:"/infinity-linha.png",revision:"caa61613bf1227d86062502ee1d11395"},{url:"/infinity-mar-col-noborder.png",revision:"5c24955347fa7060c7cbcd0c399fc3e2"},{url:"/infinity-mar-col.png",revision:"892dbef52730b599f6059fbb3ff9ec93"},{url:"/info01.svg",revision:"293122d60a3070f37349987c3c128148"},{url:"/info02.svg",revision:"6562e777d50b252a4c051e1c236642f6"},{url:"/info03.svg",revision:"29d4e6cb7324538245ccd61d2530095f"},{url:"/info04.svg",revision:"0f26e10373b089874fcdd1e1b8078729"},{url:"/informacoes-gerais.svg",revision:"774d6943525d1449b14e6afc062b5a81"},{url:"/infraestrutura.svg",revision:"7bf3c104ba57ec6dbfac702c894afaf9"},{url:"/iptu-verde.svg",revision:"d07af9528a6231b3ad519579778fb432"},{url:"/localization-nav01.svg",revision:"87c8b34c0b2e9768bc001b1689d8c13e"},{url:"/localization-nav02.svg",revision:"c5fc7c8afddfb5df86b06c4faf813c02"},{url:"/localization-nav03.svg",revision:"80b9814da5ce56cc8db97901fe01b653"},{url:"/logo-cais-218-white.svg",revision:"e902595bfd79d9005a4b44d48103ec97"},{url:"/logo-cais-292-white.svg",revision:"82fded0ef7ca3d845f88c0bac2ce46f5"},{url:"/logo-cais-small-white.svg",revision:"9a66100ad6b4820b9d0a0d428b89dd42"},{url:"/logo-infinity-blue-blue.svg",revision:"9566ccfca082158afb2c52dd16db3149"},{url:"/logo-infinity-blue-white.svg",revision:"18c1986544354d3e585243439973c5db"},{url:"/logo-infinity-sea-blue.svg",revision:"9070ec107d916893a61cf3c4e0558ad9"},{url:"/logo-infinity-sea-white.svg",revision:"c20734729bdaf24a8361ab31d6359262"},{url:"/logo-infinity-small-white.svg",revision:"9d92b40d8877fbb2eae8b5922eccfd62"},{url:"/logo-infinity-white.svg",revision:"c5be6a230177223c5a1b849ce94c22e6"},{url:"/map-localization.png",revision:"71dbc7e58c8f499428c65d2a3b681986"},{url:"/mapa-convivencia-bem-estar.png",revision:"f49785732d0a520fdb25ebdb298812b5"},{url:"/mapa-convivencia-educacao.png",revision:"9a43ad3b21679e30b97da2c9b7565110"},{url:"/mapa-convivencia-gastronomia.png",revision:"ebe2ad4461f3b18b12c1c824697a8173"},{url:"/mapa-convivencia-inativo.png",revision:"ac29a0f5483c1a114e61397f8be83684"},{url:"/mapa-convivencia-lazer.png",revision:"579eab8f54ab0fafd8e53ae40bf6d785"},{url:"/mapa-convivencia-saude.png",revision:"1406b5a05635772c888653e0500e23bf"},{url:"/mapa-convivencia-servicos-comercio.png",revision:"b660785e5bfdf1f0e0e9974a359b627c"},{url:"/mapa-convivencia-supermercado.png",revision:"d41a3b17fd578ab6c11a6fa3b67f08f3"},{url:"/maximize.svg",revision:"be9e043eeee082482192bc3a9df5683d"},{url:"/medidor-geral.svg",revision:"cfd954fc46fe06b93fd2a09ad273b9f6"},{url:"/mini-menu-bg.png",revision:"92cd8ae900a1191cd3eaf8c507fba24a"},{url:"/mini-menu-bg2.png",revision:"b19ed2aa822ba5a4bbf4383694ab7eff"},{url:"/mini-menu-item01.svg",revision:"92f85a7061fcb3f72f1cec58c61cbc00"},{url:"/mini-menu-item02.svg",revision:"42a126c52cff4226a0be3194a7e29085"},{url:"/mini-menu-item03.svg",revision:"791bcdfd0218130da1107b90827b3c33"},{url:"/mini-menu-item04.svg",revision:"df40f27449e973809255ac4917e5fbe5"},{url:"/mouse-trail.js",revision:"935fd58ed52302045636e194708a0277"},{url:"/painel-sol.svg",revision:"d3fa6e5554b7af48e3de765402a4abc9"},{url:"/panorama1.jpg",revision:"bdf37c147617f90b5e73e59ffdbe5654"},{url:"/panorama2.jpg",revision:"70150239012b63159853167d3c358348"},{url:"/photo-infinity-blue-beach-lounge01.png",revision:"614b52cec31803c6a62d9661b5b9ecd5"},{url:"/photo-infinity-blue-pavimento01.png",revision:"69620190424484137056bc68c079cef9"},{url:"/photo-infinity-blue-pavimento02.png",revision:"f80d4060a43cde5b582a8ba0e458822e"},{url:"/photo-infinity-blue-pavimento03.png",revision:"4ec47d2deb0cf5dfb157f475868b3fcf"},{url:"/photo-infinity-blue-pavimento04.png",revision:"4fb6bda93b898f59281a0b54d3afb9a4"},{url:"/photo-infinity-blue-planta-tipo01.png",revision:"527868c49c88f7ebbb6e8ef8acc2525d"},{url:"/photo-infinity-blue-planta-tipo02.png",revision:"425be15defef9379ccf70132d0d2c86f"},{url:"/photo-infinity-blue-planta-tipo03.png",revision:"bf863d3cb8a8f7ab44dc15b1a26bd1aa"},{url:"/photo-infinity-blue-planta-tipo04.png",revision:"97a3d0f29274b0b46ac50f081b5faf34"},{url:"/photo-infinity-blue-rooftop01.jpg",revision:"920f1816775eafa4836f6f2f3ec38c38"},{url:"/photo-infinity-blue-rooftop02.jpg",revision:"00397834cf3eb472f9e903990e284d57"},{url:"/photo-infinity-sea-beach-club01.png",revision:"3c1a3131b7c8c06dd237d0fef32e7142"},{url:"/photo-infinity-sea-pavimento01.png",revision:"0ca1496c8f8b95abcf363f7443e537bd"},{url:"/photo-infinity-sea-pavimento02.png",revision:"b96e6b07aa9c93cfd1f343de68116e49"},{url:"/photo-infinity-sea-pavimento03.png",revision:"82ff67aec73f1cca344d87a78da37675"},{url:"/photo-infinity-sea-pavimento04.png",revision:"cb5e93b6323915c28d48fe78cc674d8b"},{url:"/photo-infinity-sea-pavimento05.png",revision:"590c9e488a2cf22bc5af00a8942d7451"},{url:"/photo-infinity-sea-planta-tipo01.png",revision:"9c88f34b07d07cbb7098382e79f31b9c"},{url:"/photo-infinity-sea-planta-tipo02.png",revision:"2cdee8c66a9b45cd546d9fb84f91a847"},{url:"/photo-infinity-sea-planta-tipo03.png",revision:"f24f3395d6932f2785e0262b657f97d0"},{url:"/photo-infinity-sea-planta-tipo04.png",revision:"65e5c0fa38575d4e0dd76722e8d4e6e9"},{url:"/play-white.svg",revision:"7818ebb66bf623b9714aab27b815221d"},{url:"/play.svg",revision:"ebb11d5a6ad465696713253e5a8d169c"},{url:"/poi.svg",revision:"a2e71d8fb94790305512706ba541f4c4"},{url:"/predio-palmeira.svg",revision:"1acfa402782d8724db3a8dbe110a8cc5"},{url:"/predios-praia.png",revision:"ec609d519c17438d3a8c214b02c05e3d"},{url:"/requalificacao.png",revision:"c1061e63b2dd67ad3edbc6c375e53115"},{url:"/rooftop.jpg",revision:"60581fed24a7fb975b56a6cd623d94f6"},{url:"/rooftop.png",revision:"ef36298675e1b10698a6563500509c1a"},{url:"/rooftop.svg",revision:"9c15715253024fc3603b802ab4177690"},{url:"/rooftop2.png",revision:"f57fdba5940eac8a137a12142f1bcde8"},{url:"/sea-circle.svg",revision:"e066b4fc0bd1db2648fd170ad36a1dd9"},{url:"/sea.mp4",revision:"56aec4b3a63a94c7972159125f3fbecb"},{url:"/sea2.mp4",revision:"9cdd440ee421481a94297dbfd4d32560"},{url:"/signature.png",revision:"5f1adaf3bbfeb21eef8633e5638aefdd"},{url:"/tabela-vendas.png",revision:"e2b83a81cf88ca37ce6d5c547d685901"},{url:"/urbana-map.png",revision:"d325d1cd029bce6624e7ef0ea42fc592"},{url:"/vista01.jpg",revision:"098502b1de15bad8c466a5975c5875f6"},{url:"/voltar.svg",revision:"91b727ae6f8638b4e43acb86c942254f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\/^http:\/\/admin.caisbyor.com.br\/index.php?graphql.*.(png|jpg|jpeg|gif|svg|php|mp4)$\//,new e.NetworkFirst,"GET"),e.registerRoute(/\/^http?.*\//,new e.NetworkFirst({cacheName:"pages-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET")}));

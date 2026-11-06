/*
 * WEC公式サイト(STUDIO / www.wecnrt.co.jp)用の追加スクリプト
 * STUDIOのカスタムコードから読み込まれる。
 *   wec.js     … 本番用(普通にサイトを見たときに読み込まれる)
 *   wec-dev.js … 確認用(URL末尾に ?wecdev=1 を付けたときだけ読み込まれる)
 * 修正はまず wec-dev.js で確認し、OKなら wec.js に同じ内容を反映する。
 */
(function(){
  if(window.__wecLoaded)return;window.__wecLoaded=true;
  var css="\n/* ===== ① 募集中のお仕事:右→左に流れる ===== */\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8]{overflow:hidden!important;justify-content:flex-start!important;\n  -webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8].wec-on>*{animation:wecMQ var(--wec-dur,45s) linear infinite}\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8]:hover>*{animation-play-state:paused}\n@keyframes wecMQ{from{transform:translateX(0)}to{transform:translateX(var(--wec-shift,-1500px))}}\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8]>a{transition:box-shadow .35s}\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8]>a:hover{box-shadow:0 16px 30px rgba(31,68,120,.28)}\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8]>a .image{overflow:hidden}\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8]>a .image::before{transition:transform .6s}\n[data-s-592829af-eeb0-4253-a854-4965106d7ac8]>a:hover .image::before{transform:scale(1.07)}\n[data-s-46508546-05f8-4a56-a51e-a6523d3acce9]{visibility:hidden}\n@media (prefers-reduced-motion:reduce){[data-s-592829af-eeb0-4253-a854-4965106d7ac8]>*{animation:none!important}}\n/* ===== ② ヘッダー「グループ会社」メニュー ===== */\n/* PC:ヘッダーの幅を中身に合わせる */\n[data-s-c689a5f9-d552-4ef0-8884-4921c4fdbf27],[data-s-84b8707f-1696-4789-8431-8d327d4c9051],[data-s-2573930e-ea5c-490b-a9a8-f7f8927c45e3],[data-s-f1f41885-574b-4008-b4f2-e087f21f78d1]{width:auto!important;flex-shrink:0}\n.wec-gnav{position:relative;display:flex;align-items:center;height:100%}\n.wec-gnav__btn{display:flex;align-items:center;gap:4px;padding:10px;font-family:\"Noto Sans JP\",sans-serif;font-size:15px;font-weight:600;color:#333;\n  background:none;border:0;cursor:pointer;white-space:nowrap;line-height:1.4}\n.wec-gnav__btn::after{content:\"\";width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .25s}\n.wec-gnav:hover .wec-gnav__btn::after,.wec-gnav.is-open .wec-gnav__btn::after{transform:rotate(-135deg) translateY(-1px)}\n.wec-gnav__menu{position:absolute;top:100%;left:50%;min-width:340px;padding:10px;margin:0;list-style:none;background:#fff;border-radius:14px;\n  box-shadow:0 14px 40px rgba(20,40,70,.18);opacity:0;visibility:hidden;transform:translate(-50%,8px);transition:opacity .2s,transform .2s,visibility .2s;z-index:9999}\n.wec-gnav__menu::before{content:\"\";position:absolute;left:0;right:0;top:-14px;height:14px}\n.wec-gnav:hover .wec-gnav__menu,.wec-gnav:focus-within .wec-gnav__menu,.wec-gnav.is-open .wec-gnav__menu{opacity:1;visibility:visible;transform:translate(-50%,0)}\n.wec-gnav__menu li{margin:0}\n.wec-gnav__menu li+li{border-top:1px solid #f0f2f5}\n.wec-gnav__menu a,.wec-gnav__menu span{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 14px;border-radius:8px;\n  font-family:\"Noto Sans JP\",sans-serif;font-size:14px;font-weight:500;color:#333;text-decoration:none;line-height:1.5}\n.wec-gnav__menu a{color:#1f7fc4;transition:background .2s}\n.wec-gnav__menu a:hover{background:#eef6fc}\n.wec-gnav__menu a::after{content:\"↗\";font-size:13px;opacity:.7}\n/* スマホ:メニュー(小窓)の中 */\n[data-s-654e8a8e-c732-444d-880b-22053d11469f],[data-s-a6cec7a6-d8b5-4931-a880-a81e1b385fcb]{height:auto!important}\n.wec-gnav-sp{display:flex;flex-direction:column;align-items:center;width:100%}\n.wec-gnav-sp__btn{display:flex;align-items:center;gap:6px;background:none;border:0;color:#fff;font-family:\"Noto Sans JP\",sans-serif;font-size:inherit;line-height:inherit;cursor:pointer;padding:0}\n.wec-gnav-sp__btn::after{content:\"\";width:7px;height:7px;border-right:1.5px solid #fff;border-bottom:1.5px solid #fff;transform:rotate(45deg) translateY(-3px);transition:transform .25s}\n.wec-gnav-sp.is-open .wec-gnav-sp__btn::after{transform:rotate(-135deg)}\n.wec-gnav-sp ul{display:none;list-style:none;margin:6px 0 8px;padding:8px 16px;background:rgba(255,255,255,.12);border-radius:10px;text-align:center}\n.wec-gnav-sp.is-open ul{display:block}\n.wec-gnav-sp a,.wec-gnav-sp span{display:block;padding:6px 0;font-family:\"Noto Sans JP\",sans-serif;font-size:14px;line-height:1.5;color:#fff;text-decoration:none}\n.wec-gnav-sp a{text-decoration:underline;text-underline-offset:3px}\n.wec-gnav-sp a::after{content:\" ↗\";font-size:12px}\n/* ===== ③ 先輩社員の声:写真の並びと背景 ===== */\n/* 背景:水玉をやめて、やわらかいグラデーション+光のにじみ */\n[data-s-6e404994-3cec-41fc-9c6a-bf1f70ed7807]{gap:56px;border:0!important;background:linear-gradient(120deg,#e6f5fc 0%,#f4f9fd 50%,#efedfb 100%)!important;overflow:hidden}\n[data-s-6e404994-3cec-41fc-9c6a-bf1f70ed7807]::before{background-image:radial-gradient(circle at 12% 20%,rgba(127,211,242,.35) 0,rgba(127,211,242,0) 32%),radial-gradient(circle at 88% 85%,rgba(185,182,238,.35) 0,rgba(185,182,238,0) 34%)!important;background-size:auto!important;background-repeat:no-repeat!important}\n/* 2枚を中央に寄せて並べる */\n[data-s-2acfd744-13c4-4d91-8a71-64fe2b199ff9],[data-s-e9710656-3086-4cc4-a64f-6336449b2b52]{width:auto!important;flex:0 0 auto}\n/* カード:幅を少し細く、白フチ+角丸+影 */\n[data-s-dfb7eb4d-5fa8-486f-bbb3-f3e3ea62a9e4],[data-s-d8225e65-0a83-421c-a813-1c3534678212]{\n  width:360px!important;height:440px!important;border:8px solid #fff!important;border-radius:18px!important;overflow:hidden!important;\n  box-shadow:0 18px 40px rgba(31,68,120,.16)!important;transition:transform .4s cubic-bezier(.2,.7,.2,1),box-shadow .4s!important}\n[data-s-dfb7eb4d-5fa8-486f-bbb3-f3e3ea62a9e4]::before,[data-s-d8225e65-0a83-421c-a813-1c3534678212]::before{transition:transform .8s cubic-bezier(.2,.7,.2,1)}\n[data-s-dfb7eb4d-5fa8-486f-bbb3-f3e3ea62a9e4]:hover,[data-s-d8225e65-0a83-421c-a813-1c3534678212]:hover{transform:translateY(-6px);box-shadow:0 26px 50px rgba(31,68,120,.22)!important}\n[data-s-dfb7eb4d-5fa8-486f-bbb3-f3e3ea62a9e4]:hover::before,[data-s-d8225e65-0a83-421c-a813-1c3534678212]:hover::before{transform:scale(1.05)}\n[data-s-e2f48262-4b49-4ed7-96a5-eae1368b91ad],[data-s-ffcafae9-a316-43cf-a70b-dbe5d4d610ec]{width:100%!important;position:relative;z-index:1}\n@media (max-width:767px){\n  [data-s-6e404994-3cec-41fc-9c6a-bf1f70ed7807]{gap:28px}\n  [data-s-dfb7eb4d-5fa8-486f-bbb3-f3e3ea62a9e4],[data-s-d8225e65-0a83-421c-a813-1c3534678212]{width:min(86vw,340px)!important;height:400px!important}\n}\n";
  var st=document.createElement('style');st.id='wec-custom-style';st.textContent=css;document.head.appendChild(st);
})();
/* ===== ① 募集中のお仕事 ===== */
(function(){
  var ROW='[data-s-592829af-eeb0-4253-a854-4965106d7ac8]';
  function marquee(){
    var r=document.querySelector(ROW);if(!r)return;
    var orig=[].filter.call(r.children,function(c){return !c.classList.contains('wec-clone')});
    if(!orig.length)return;
    if(!r.querySelector('.wec-clone')){orig.forEach(function(c){var k=c.cloneNode(true);k.classList.add('wec-clone');k.setAttribute('aria-hidden','true');k.setAttribute('tabindex','-1');r.appendChild(k);});}
    var first=orig[0],next=r.querySelector('.wec-clone');
    var shift=next.offsetLeft-first.offsetLeft;
    if(shift>0){r.style.setProperty('--wec-shift',(-shift)+'px');r.style.setProperty('--wec-dur',Math.max(20,shift/40)+'s');r.classList.add('wec-on');}
  }
  function run(){try{marquee();}catch(e){}}
  var n=0,t=setInterval(function(){run();if(++n>40)clearInterval(t);},500);
  window.addEventListener('load',run);window.addEventListener('resize',function(){var r=document.querySelector(ROW);if(r){r.classList.remove('wec-on');}run();});
  new MutationObserver(function(){if(document.querySelector(ROW)&&!document.querySelector('.wec-clone'))run();}).observe(document.documentElement,{childList:true,subtree:true});
})();
/* ===== ② グループ会社メニュー ===== */
(function(){
  var LIST=[
    ["ワールドホテルマネジメント株式会社",""],
    ["ワールドNRT株式会社",""],
    ["株式会社日本サービス",""],
    ["有限会社ワールドケータリングサービス",""],
    ["一般社団法人よろこび","https://yorokobi.studio.site/company"],
    ["SAKURA LANKA JAPAN FOREIGN EMPLOYMENT (PVT) LTD","https://sakuralankajapan.com/"],
    ["SGP協同組合","https://sgp-global.s-tanabe-acd.workers.dev/#group"]
  ];
  function items(){return LIST.map(function(c){return c[1]?'<li><a href="'+c[1]+'" target="_blank" rel="noopener">'+c[0]+'</a></li>':'<li><span>'+c[0]+'</span></li>';}).join('');}
  // どのページでも、ヘッダーのメニュー枠(固定幅)を中身に合わせて広げる
  function fit(w){var hdr=w.closest('header');if(!hdr)return;var hw=hdr.getBoundingClientRect().width;var e=w.parentElement;
    for(var i=0;i<8&&e&&e!==hdr;i++){if(e.getBoundingClientRect().width>hw*0.45)break;e.style.setProperty('width','auto','important');e.style.setProperty('flex-shrink','0');e=e.parentElement;}}
  function pc(){
    var link=[].find.call(document.querySelectorAll('header a'),function(a){return a.textContent.trim()==='会社情報';});
    if(!link)return;
    var ex=link.parentElement.querySelector('.wec-gnav');if(ex){fit(ex);return;}
    var w=document.createElement('div');w.className='wec-gnav';
    w.innerHTML='<button type="button" class="wec-gnav__btn" aria-haspopup="true">グループ会社</button><ul class="wec-gnav__menu">'+items()+'</ul>';
    w.querySelector('button').addEventListener('click',function(e){e.preventDefault();w.classList.toggle('is-open');});
    document.addEventListener('click',function(e){if(!w.contains(e.target))w.classList.remove('is-open');});
    link.insertAdjacentElement('afterend',w);fit(w);
  }
  function sp(){
    var col=document.querySelector('[data-s-a6cec7a6-d8b5-4931-a880-a81e1b385fcb]');
    if(!col||col.querySelector('.wec-gnav-sp'))return;
    var a=[].find.call(col.children,function(el){return el.textContent.trim()==='会社情報';});if(!a)return;
    var d=document.createElement('div');d.className='wec-gnav-sp';
    d.innerHTML='<button type="button" class="wec-gnav-sp__btn">グループ会社</button><ul>'+items()+'</ul>';
    var b=d.querySelector('button'),cs=getComputedStyle(a);b.style.fontSize=cs.fontSize;b.style.lineHeight=cs.lineHeight;b.style.fontWeight=cs.fontWeight;
    b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();d.classList.toggle('is-open');});
    a.insertAdjacentElement('afterend',d);
  }
  function run(){try{pc();sp();}catch(e){}}
  var n=0,t=setInterval(function(){run();if(++n>40)clearInterval(t);},500);
  window.addEventListener('load',run);
  var q=0;new MutationObserver(function(){if(q)return;q=1;requestAnimationFrame(function(){q=0;run();});}).observe(document.documentElement,{childList:true,subtree:true});
})();

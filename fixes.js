MOL.modes.classic.title='Обычный режим';
MOL.modes.lactosefree.title='Безлактозный';
const renameModes=()=>{document.querySelectorAll('.mode').forEach(b=>{const title=b.dataset.mode==='classic'?'Обычный режим':'Безлактозный';for(const n of b.childNodes){if(n.nodeType===Node.TEXT_NODE&&n.textContent.trim()&&n.textContent!==title)n.textContent=title;}});};
new MutationObserver(renameModes).observe(document.getElementById('app'),{childList:true,subtree:true});
renameModes();
const originalMapScreen=mapScreen;
mapScreen=function(){originalMapScreen();document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));c.classList.add('active');const f=c.dataset.f;const points=MOL.points.filter(p=>f==='all'||(['classic','lactosefree'].includes(f)?p.mode===f||p.mode==='both':p.type===f));document.getElementById('points').innerHTML=points.map(p=>'<div class="point"><b>'+esc(p.name)+'</b><div class="meta">'+esc(p.address)+'</div><div class="meta">'+esc(p.note)+'</div><div class="small">Демо-точка: наличие товаров не проверено</div></div>').join('')||'<p>Пока нет точек.</p>';});document.querySelector('.chip.active').click();};
home();

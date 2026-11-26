const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
/* loader */
{const ld=$("#ld"),ln=$("#ln");let n=0;const t=setInterval(()=>{n+=5;ln.textContent=n+"%";if(n>=100){clearInterval(t);ld.classList.add("x")}},40)}
/* theme */
$("#tg").onclick=()=>{const R=document.documentElement;const dark=(R.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"))==="dark";R.dataset.theme=dark?"light":"dark"};
/* typing roles */
{const w=["AI","Technology","Innovation","Code","Hardware"],el=$("#rl");let i=0,j=0,del=false;(function tick(){const s=w[i];el.textContent=s.slice(0,j);if(!del){if(j<s.length){j++;return setTimeout(tick,90)}del=true;return setTimeout(tick,1300)}if(j>0){j--;return setTimeout(tick,45)}del=false;i=(i+1)%w.length;setTimeout(tick,200)})()}
/* skills */
const S={Code:["Programming foundations.","Building problem-solving skills with C and Python, one concept and one program at a time.",["C","Python"]],Web:["Web basics.","Learning HTML and CSS to build and publish pages.",["HTML","CSS"]],AI:["Curious about AI.","Exploring how intelligent systems learn and where they can help.",["AI","Machine learning basics"]],Hardware:["Hardware with Arduino.","Arduino Uno experiments, including the Morse code communication machine.",["Arduino Uno","Git & GitHub"]]};
{const c=$("#chips"),b=$("#sk");const pick=k=>{$$("#chips .chip").forEach(x=>x.classList.toggle("on",x.textContent===k));const[h,p,t]=S[k];b.innerHTML="<p class='tag'>Selected / "+k+"</p><h3>"+h+"</h3><p class='mut'>"+p+"</p><div class='tools'>"+t.map(x=>"<span>"+x+"</span>").join("")+"</div>"};Object.keys(S).forEach(k=>{const e=document.createElement("button");e.className="chip";e.textContent=k;e.onclick=()=>pick(k);c.appendChild(e)});pick("Code")}
/* static morse */
$("#sig").textContent="— · · ·   · · — ·";
/* orbit */
const O={Code:"Code: C and Python, one program at a time.",AI:"AI: exploring how intelligent systems think and learn.",Hardware:"Hardware: Arduino Uno experiments and the Morse code machine.",Ideas:"Ideas: staying curious and improving one idea at a time."};
{const p=$("#op"),show=k=>{$$(".pl").forEach(x=>x.classList.toggle("on",x.dataset.k===k));p.innerHTML="<p class='tag'>Orbit / "+k+"</p><p style='margin:0'>"+O[k]+"</p>"};$$(".pl").forEach(b=>b.onclick=()=>show(b.dataset.k));show("Code")}
/* github feed */
fetch("https://api.github.com/users/Jevin19/repos?sort=updated&per_page=6").then(r=>r.ok?r.json():Promise.reject()).then(d=>{const el=$("#repos");const list=d.filter(r=>!r.fork);el.innerHTML=list.length?list.map(r=>"<a class='card repo spot' href='"+r.html_url+"'><b>"+r.name+"</b><p>"+(r.description||"No description yet.")+"</p><small>"+(r.language||"Code")+" · ★ "+r.stargazers_count+"</small></a>").join(""):"<div class='card mut'>No public repositories yet. Follow along on GitHub.</div>"}).catch(()=>{$("#repos").innerHTML="<div class='card mut'>The live feed is unavailable right now. Visit the GitHub profile to see the latest work.</div>"});
/* terminal */
{const out=$("#out"),cmd=$("#cmd");const C={help:"Commands: about, skills, projects, github, email, clear",about:"Jevin Kachchhi, 18. CSE student at UIT, Karnavati University, exploring AI and technology.",skills:"C, Python, HTML, CSS, Arduino, Git & GitHub",projects:"Morse Code Communication Machine (Arduino Uno), in development.",github:"github.com/Jevin19",email:"2000016964@karnavatiuniversity.edu.in"};
cmd.addEventListener("keydown",e=>{if(e.key!=="Enter")return;const v=cmd.value.trim().toLowerCase();cmd.value="";if(v==="clear"){out.textContent="";return}out.textContent+="> "+v+"\n"+(C[v]||(v?"Command not found. Type help.":""))+"\n"})}
/* contact form */
$("#fs").onclick=()=>{const b="Hi Jevin,\n\n"+$("#fm").value+"\n\n"+$("#fn").value+" ("+$("#fe").value+")";location.href="mailto:2000016964@karnavatiuniversity.edu.in?subject="+encodeURIComponent("Portfolio message from "+($("#fn").value||"a visitor"))+"&body="+encodeURIComponent(b)};
/* assistant */
{const ap=$("#ap"),am=$("#am"),A={about:"Jevin is an 18-year-old B.Tech CSE student at UIT, Karnavati University, exploring AI and technology.",projects:"Morse Code Communication Machine on Arduino Uno, with AI in the project brief. More builds are coming.",contact:"Email 2000016964@karnavatiuniversity.edu.in, or use GitHub and LinkedIn in the Connect section."};$("#ab").onclick=()=>{ap.hidden=!ap.hidden};$$("[data-q]").forEach(b=>b.onclick=()=>{am.textContent=A[b.dataset.q]})}
/* scroll reveal, counters, nav highlight, progress */
{const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");e.target.querySelectorAll("[data-n]").forEach(c=>{const t=+c.dataset.n;let v=0;const s=setInterval(()=>{v+=Math.max(1,Math.ceil(t/30));if(v>=t){v=t;clearInterval(s)}c.textContent=v},40)});io.unobserve(e.target)}),{threshold:.12});$$(".r").forEach(x=>io.observe(x));
const links=$$("#nav a");const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});$$("section[id]").forEach(s=>so.observe(s));
const bar=$("#bar");addEventListener("scroll",()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+"%"},{passive:true})}
/* spotlight cards */
document.addEventListener("mousemove",e=>{const c=e.target.closest&&e.target.closest(".spot");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")}},{passive:true});
/* mouse effects */
(()=>{if(!matchMedia("(pointer:fine)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
const cg=$("#cg"),cd=$("#cd"),fr=$("#fr"),fl=$$(".fl"),mg=$$(".mag");let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY;document.body.classList.add("mv");const fx=tx/innerWidth-.5,fy=ty/innerHeight-.5;
fr.style.transform="perspective(900px) rotateY("+fx*12+"deg) rotateX("+(-fy*12)+"deg)";fl.forEach((f,i)=>f.style.translate=(-fx*(14+i*9))+"px "+(-fy*(14+i*9))+"px");
mg.forEach(m=>{const r=m.getBoundingClientRect(),dx=tx-(r.left+r.width/2),dy=ty-(r.top+r.height/2);m.style.transform=Math.hypot(dx,dy)<90?"translate("+dx*.2+"px,"+dy*.25+"px)":""})},{passive:true});
document.addEventListener("mouseover",e=>cd.classList.toggle("h",!!e.target.closest("a,button,summary,.chip,input,textarea")));
document.addEventListener("mouseleave",()=>document.body.classList.remove("mv"));
(function loop(){x+=(tx-x)*.1;y+=(ty-y)*.1;cg.style.transform="translate("+(x-210)+"px,"+(y-210)+"px)";cd.style.transform="translate("+tx+"px,"+ty+"px)";requestAnimationFrame(loop)})()})();

document.addEventListener('DOMContentLoaded',function(){
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dots button')];let i=0;
function show(n){i=(n+slides.length)%slides.length;slides.forEach((x,j)=>x.classList.toggle('active',j===i));dots.forEach((x,j)=>x.classList.toggle('active',j===i))}
dots.forEach((d,j)=>d.onclick=()=>show(j));setInterval(()=>show(i+1),5000);
const reviews=[...document.querySelectorAll('.review')];let r=0;function sr(n){r=(n+reviews.length)%reviews.length;reviews.forEach((x,j)=>x.classList.toggle('active',j===r))}
document.getElementById('prev').onclick=()=>sr(r-1);document.getElementById('next').onclick=()=>sr(r+1);setInterval(()=>sr(r+1),6000);
document.getElementById('menu').onclick=()=>document.querySelector('.links').classList.toggle('open');
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>document.querySelector('.links').classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('searchBtn').onclick=()=>{let q=document.getElementById('search').value.trim().toLowerCase();if(!q)return;let s=[...document.querySelectorAll('section')].find(x=>x.innerText.toLowerCase().includes(q));if(s)s.scrollIntoView({behavior:'smooth'});else alert('Try rooms, gallery, reviews or booking.')}
document.getElementById('booking').onsubmit=e=>{e.preventDefault();if(e.target.website.value)return;document.getElementById('status').textContent='Thank you. Your enquiry has been captured on this page. Connect Formspree/Web3Forms in app.js to receive it by email.'};
});
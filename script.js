window.addEventListener("load",()=>setTimeout(()=>loader.style.display="none",1200));

const loader=document.getElementById("loader");

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{
document.body.classList.toggle("light");
};

document.querySelectorAll(".faq-item button").forEach(btn=>{
btn.onclick=()=>{
const content=btn.nextElementSibling;
content.style.display=
content.style.display==="block"
?"none"
:"block";
};
});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

let progress=
(window.scrollY/
(document.body.scrollHeight-window.innerHeight))*100;

document.querySelector(".progress").style.width=
progress+"%";

topBtn.style.display=
window.scrollY>300
?"block"
:"none";
});

topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};

const carousel=document.getElementById("carousel");

setInterval(()=>{
carousel.scrollBy({
left:250,
behavior:"smooth"
});
},4000);

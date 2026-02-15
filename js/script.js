// Navbar
const toggle=document.getElementById("menu-toggle");
const navbar=document.getElementById("navbar");
toggle.addEventListener("click",()=>navbar.classList.toggle("active"));

// Counter
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;
const inc=target/100;
if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
update();
});

// FAQ
document.querySelectorAll(".faq-question").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.nextElementSibling.classList.toggle("active");
});
});
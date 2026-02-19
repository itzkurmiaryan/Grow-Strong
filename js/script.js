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

// ===============================
// CONTINUOUS INFINITE PRODUCT SLIDER
// ===============================

const slider = document.getElementById("productSlider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slider) {

  // Clone all cards for infinite effect
  slider.innerHTML += slider.innerHTML;

  let scrollAmount = 0;
  const speed = 0.5; // jitna kam utna smooth slow

  function autoScroll() {
    scrollAmount += speed;
    slider.scrollLeft = scrollAmount;

    // Reset scroll when half reached (infinite loop)
    if (scrollAmount >= slider.scrollWidth / 2) {
      scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  autoScroll();

  // Arrow Controls
  nextBtn.addEventListener("click", () => {
    scrollAmount += 300;
  });

  prevBtn.addEventListener("click", () => {
    scrollAmount -= 300;
  });

}
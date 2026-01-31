document.addEventListener("mousemove", e => {
    document.querySelector(".hero")?.style.setProperty(
        "background-position",
        `${e.clientX/40}px ${e.clientY/40}px`
    );
});
const text = "TAEHEE ALL MEMBERS";
const el = document.getElementById("typeTitle");
let i = 0;

el.textContent = "";
el.style.opacity = 1;

function typeEffect(){
  if(i < text.length){
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

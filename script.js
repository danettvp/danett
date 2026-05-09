// MENU VIEW
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
});

// CASE STUDY Cursor View
const cursor = document.querySelector(".cursor-label");
const cards = document.querySelectorAll(".case-study");

cards.forEach(card => {
card.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1;
});

card.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
});

card.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
});

// HERO Cursor Scroll
document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.getElementById("cursorHint");
  
    if (!cursor) return;
  
    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  
    document.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight * 0.6) {
        cursor.style.opacity = "0";
      }
    });
  });
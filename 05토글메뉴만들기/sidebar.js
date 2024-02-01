/* ==========좌측사이드========== */

var menuBtn = document.querySelector(".menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener("click" , function(){

    sidenav.classList.toggle("active");
})

// OFFCANVAS MENU TOGGLE
$(function () {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});

// Shrink Navbar on Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#0e0e0f";
    document.getElementById("logo").style.height = "55px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#f1f1f100";
    document.getElementById("logo").style.height = "65px";
  }
}


// RELOAD PAGE
$("#Reloadpage").click(function () {
  location.reload();
});


// INITIALIZE AOS
  AOS.init();

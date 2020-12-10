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
    document.getElementById("navbar").style.backgroundColor = "#ffffff";
    document.getElementById("logo").style.height = "37px";
    document.getElementById("navbar").style.fontWeight = "100";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#f1f1f100";
    document.getElementById("logo").style.height = "44px";
    document.getElementById("navbar").style.fontWeight = "300";
  }
}


// RELOAD PAGE
$("#Reloadpage").click(function () {
  location.reload();
});


// INITIALIZE AOS
  AOS.init();

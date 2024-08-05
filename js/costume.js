var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

// scrollToTopButton

function scrolltoptopFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
  buttonshowonScroll();
};
function buttonshowonScroll() {
  var button = document.getElementById("scrollbutton");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// onscrolladdclassfunc

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Define the scroll position where you want to add/remove the class
  var scrollThreshold = 200; // Change this value as per your requirement

  var element = document.querySelector(".navbar-nav");

  if (scrollPosition > scrollThreshold) {
    element.classList.add("add-header-bg");
  } else {
    element.classList.remove("add-header-bg");
  }
});

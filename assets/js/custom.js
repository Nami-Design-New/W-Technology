const { pathname } = window.location;
let navLinks = document.querySelectorAll(".nav-links li");
let links = document.querySelectorAll(".nav-links li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].classList.remove("active");
}
for (var i = 0; i < navLinks.length; i++) {
  const linkPathname = new URL(links[i].href).pathname;
  if (linkPathname === pathname) {
    navLinks[i].classList.add("active");
  }
  if (pathname === "/") {
    navLinks[0].classList.add("active");
  }
}
// navigation header
let bar = document.querySelector(".header");
window.addEventListener("scroll", () => {
  this.scrollY === 0
    ? bar.classList.remove("scrolled")
    : bar.classList.add("scrolled");
});
// swiper-team
let aboutSwiper = new Swiper(".teamSwiper", {
  spaceBetween: 50,
  grabCursor: true,
  pagination: true,
  loop: true,
  pagination: {
    el: ".teamSwiperPagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 1,
    },
  },
});
//contact higlight inputs
function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}
// counters
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
window.onscroll = function () {
  if (this.scrollY >= 100) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};
// testimonials slider
// var swiper = new Swiper(".testimonilas", {
//   loop: true,
//   spaceBetween: 30,
//   speed: 2000,
//   centeredSlides: true,
//   pagination: {
//     el: ".testimonialsSwiperPagination",
//     clickable: true
//   },
//   autoplay: {
//     delay: 2500
//   },
//   breakpoints: {
//     992: {
//       slidesPerView: 3
//     },
//     768: {
//       slidesPerView: 2
//     },
//     350: {
//       slidesPerView: 1
//     }
//   }
// });
//projects slider
var projectsSwiper = new Swiper(".projects", {
  loop: true,
  spaceBetween: 0,
  speed: 2000,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1200: {
      slidesPerView: 7,
    },
    992: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 4,
    },
    350: {
      slidesPerView: 2,
    },
  },
});

let toggler = document.querySelector(".toogler");
let menu = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("close");
  } else {
    toggler.classList.remove("close");
  }
});
//hero section slider
let heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".heroPagination",
    clickable: true,
  },
});

$(".hero-swiper").hover(
  function () {
    this.swiper.autoplay.stop();
  },
  function () {
    this.swiper.autoplay.start();
  }
);

$(document).ready(function () {
  $(".preloader").delay(1000).fadeOut(300);
  // fav icon
  function setFavicon() {
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const faviconName = isDarkMode ? "assets/img/fav.svg" : "assets/img/fav2.svg";
    favicon.href = faviconName;
  }
  setFavicon();
});
$(document).ready(function () {
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    // easing: "linear",
    once: true,
  });
  //filter isotop
  $(document).ready(function () {
    var $projects = $(".filter-wapper").isotope({
      itemSelector: ".project-item",
      layoutMode: "fitRows",
    });
    $(".filter-btns").on("click", ".filter-btn", function () {
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");
      var filterValue = $(this).attr("data-filter");
      $projects.isotope({ filter: filterValue });
    });
  });
});
//contact-map
if (navigator.geolocation) {
  var places = [
    { name: "Toronto, Ontario, Canada", coords: [43.6532, -79.3832] },
    { name: "Boston, Massachusetts, USA", coords: [42.3601, -71.0589] },
  ];
  navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    const map = L.map("mapLocation").setView([43.0, -75.0], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    places.forEach((place) => {
      L.marker(place.coords).addTo(map).bindPopup(place.name).openPopup();
    });
  });
}

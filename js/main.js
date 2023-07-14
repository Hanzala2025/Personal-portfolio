// *********  MENU STYLING *********//
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
var closeButton = document.getElementById("close-menu");

menuButton.addEventListener("click", function () {
  menu.classList.add("open");
});

closeButton.addEventListener("click", function () {
  menu.classList.remove("open");
});

// *********  ACTIVE BUTTON STYLING *********//
// Get the current page URL
var currentPageUrl = window.location.href;

// Select the navbar links
var navbarLinks = document.querySelectorAll(".navbar-link");

// Loop through the navbar links and add the active class to the corresponding link
navbarLinks.forEach(function (link) {
  if (link.href === currentPageUrl) {
    link.classList.add("active");
  }
});

// ************************ SLICK JS CAROUSEL  ************************ //

$(document).ready(function () {
  $(".testimonial-carousel").slick({
    dots: true, // Display navigation dots
    arrows: false, // Hide navigation arrows
    autoplay: false, // Enable autoplay
    autoplaySpeed: 5000, // Autoplay speed in milliseconds
    mobileFirst: true,
  });
});

// ************************ COUNTING NUMBERS ************************ //

// ************************ COUNT UP JS LIB ************************ //

document.addEventListener("DOMContentLoaded", function () {
  var counters = document.getElementsByClassName("number-counter");

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  var handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var target = +entry.target.getAttribute("data-target");
        var countUp = new CountUp(entry.target, 0, target, 0, 7); // Duration: 7 seconds
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
        observer.unobserve(entry.target);
      }
    });
  };

  var observer = new IntersectionObserver(handleIntersect, options);

  Array.prototype.forEach.call(counters, function (counter) {
    observer.observe(counter);
  });
});

// ************************  TESTIMONIAL CAROUSEL ************************//

AOS.init();

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".illustrator , .xd", {
//   duration: 8,
//   x: 50,
//   scrollTrigger: {
//     trigger: ".hero_container",
//     start: "top top",
//     end: "bottom center",
//     scrub: true,
//   },
// });

// gsap.to(".photoshop , .indesign", {
//   duration: 8,
//   x: -50,
//   scrollTrigger: {
//     trigger: ".hero_container",
//     start: "top top",
//     end: "bottom center",
//     scrub: true,
//   },
// });

// gsap.to(".img_rotator", {
//   rotate: 0,
//   scrollTrigger: {
//     trigger: ".projects_section",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   },
// });

// gsap.to(".obj_1", {
//   x: -250,
//   ease: "power2.inOut", // Ease in-out easing
//   // duration: 3,
//   scrollTrigger: {
//     trigger: ".m_1",
//     start: "top center",
//     end: "bottom top",
//     scrub: true,
//   },
// });

gsap.to(".circle_one", {
  x: -300,
  scrollTrigger: {
    trigger: ".counting_container",
    start: "top 70%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".circle_two", {
  x: 300,
  scrollTrigger: {
    trigger: ".counting_container",
    start: "top 50%",
    end: "bottom 30%",
    scrub: true,
  },
});

// ****************************** CIRCLE OBJECTS MOVEMENTS HORIZONTALLY GSAP ANIIMATION ***************************//
gsap.to(".obj_1", {
  x: -500,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".m_1",
    start: "top top",
    end: "center 20$ ",
    scrub: true,
    toggleActions: "play reverse restart",
  },
});

gsap.to(".obj_2", {
  x: 500,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".m_2",
    start: "top top",
    end: "center 20$ ",
    scrub: true,
    toggleActions: "play reverse restart",
  },
});

gsap.to(".obj_3", {
  x: -500,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".m_3",
    start: "top top",
    end: "center 20$ ",
    scrub: true,
    toggleActions: "play reverse restart",
  },
});

gsap.to(".obj_4", {
  x: 500,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".m_4",
    start: "top top",
    end: "center 20$ ",
    scrub: true,
    toggleActions: "play reverse restart",
  },
});
// ****************************** IMAGE ROTATION GSAP ANIIMATION ***************************//

gsap.to(".img_rotator_one", {
  rotate: "0deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".img_rotator_one",
    start: "top 40%",
    end: "center top",
    toggleActions: "play reverse restart reverse",
    scrub: "true",
  },
});
gsap.to(".img_rotator_two", {
  rotate: "0deg",
  duration: 2,
  scrollTrigger: {
    trigger: ".img_rotator_two",
    start: "top 40%",
    end: "70% top",
    toggleActions: "play reverse restart reverse",
    // scrub: "true",
  },
});
gsap.to(".img_rotator_three", {
  rotate: "0deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".img_rotator_three",
    start: "top 40%",
    end: "center top",
    toggleActions: "play reverse restart reverse",
    // scrub: "true",
  },
});
gsap.to(".img_rotator_four", {
  rotate: "0deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".img_rotator_four",
    start: "top 40%",
    end: "center top",
    toggleActions: "play reverse restart reverse",
    // scrub: "true",
  },
});

gsap.to(".img_rotator_five", {
  rotate: "0deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".img_rotator_five",
    start: "top 40%",
    end: "center top",
    toggleActions: "play reverse restart reverse",
    // scrub: "true",
  },
});

gsap.to(".img_rotator_six", {
  rotate: "0deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".img_rotator_six",
    start: "top 40%",
    end: "center top",
    toggleActions: "play reverse restart reverse",
    // scrub: "true",
  },
});

gsap.to(".img_rotator_seven", {
  rotate: "0deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".img_rotator_seven",
    start: "top 40%",
    end: "center top",
    toggleActions: "play reverse restart reverse",
    // scrub: "true",
  },
});

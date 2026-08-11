function sendToWhatsApp(){
  let nameEl = document.getElementById("name");
  let phoneEl = document.getElementById("phone");
  let apartmentEl = document.getElementById("apartment");
  let msgEl = document.getElementById("msg");

  let name = nameEl ? nameEl.value : "";
  let phone = phoneEl ? phoneEl.value : "";
  let apartment = apartmentEl ? apartmentEl.value : "";
  let msg = msgEl ? msgEl.value : "";

  let url = "https://wa.me/923356909090?text="
  + "Name: " + encodeURIComponent(name) + "%0a"
  + "Phone: " + encodeURIComponent(phone) + "%0a"
  + "Apartment: " + encodeURIComponent(apartment) + "%0a"
  + "Message: " + encodeURIComponent(msg);

  window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
  var heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    function showHeroVideo() {
      heroVideo.classList.add("loaded");
      heroVideo.classList.add("active");
    }
    if (heroVideo.readyState >= 3) {
      showHeroVideo();
    } else {
      heroVideo.addEventListener("canplay", showHeroVideo);
    }
  }

  // Universal Hamburger Navigation Toggle
  var hamburger = document.getElementById("hamburger");
  var mainNav = document.getElementById("main-nav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      mainNav.classList.toggle("open");
      hamburger.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", mainNav.classList.contains("open"));
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
        mainNav.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }
});

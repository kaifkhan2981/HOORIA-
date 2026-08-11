function sendToWhatsApp(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let apartment = document.getElementById("apartment").value;
let msg = document.getElementById("msg").value;

let url = "https://wa.me/923356909090?text="
+ "Name: " + name + "%0a"
+ "Phone: " + phone + "%0a"
+ "Apartment: " + apartment + "%0a"
+ "Message: " + msg;

window.open(url,'_blank');
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
});

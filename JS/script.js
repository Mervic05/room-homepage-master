

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


let menuOpen = document.getElementById('#menuOpen')
let menuClose = document.getElementById('#menuClose')
let mobileMenu = document.querySelector('.navbar .mobile')


function dropdown(){
    mobileMenu.classList.add('active');
    mobileMenu.style.transition ='transform 0.5s ease-out';
  }

function removeMenu(){
  mobileMenu.classList.remove("active");
}
  

let blogadd = document.querySelector('.blog-add');

document.querySelector('#blog-btn').onclick = () =>{
    blogadd.classList.toggle('active');
    revadd.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let revadd = document.querySelector('.review-add');

document.querySelector('#review-btn').onclick = () =>{
    revadd.classList.toggle('active');
    blogadd.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  blogadd.classList.remove('active');
  revadd.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  blogadd.classList.remove('active');
  revadd.classList.remove('active');
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
  blogadd.classList.remove('active');
  revadd.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

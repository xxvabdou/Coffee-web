const menuOpen = document.querySelector("#menu-open-button");
const menuClose = document.querySelector("#menu-close-button");
menuOpen.addEventListener("click" , () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuClose.addEventListener("click" , () => {
    menuOpen.click();
});

const swiper = new Swiper('.solid-wrapper', {
  // Optional parameters
    loop: true,
    grabCursor:true,
    spaceBetween: 25,

  // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
    },

  // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

breakpoints: {
    0: {
        slidesPerView : 1
    } , 
    768:{
        slidesPerView : 2
    },
    1024:{
        slidesPerView : 3
    },

},

});

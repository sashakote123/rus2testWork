AOS.init();

const swiper1 = new Swiper('.row-1', {
    slidesPerView: 5,
    spaceBetween: 10,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    speed: 3000,
    direction: 'horizontal',
});

const swiper2 = new Swiper('.row-2', {
    slidesPerView: 5,
    spaceBetween: 10,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 3000,
    direction: 'horizontal',
});

let mySlider = document.querySelector(".main_slider");
mySlider.customSlider({
    maxSlides: 1,
    slideWidth: 300,
    slideHeight: 200,
    loop: true,
    navs: true,
    autoplay: true,
    timeout: 400,
});

let newsSlider = document.querySelector(".news_slider");
newsSlider.customSlider({
    maxSlides: 1,
    slideWidth: 300,
    slideHeight: 200,
    loop: true,
    navs: true,
    autoplay: true,
    timeout: 400,
});
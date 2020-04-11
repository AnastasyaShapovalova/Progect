const defaultSetting = {
    slideWidth: 300,
    slideHeight: "",
    maxSlides: 1,
}

let moveNum = 0;

let customSlider = document.querySelector(".custom_slider");

customSlider.customSlider = function (sliderSetting = {}) {
    const slidesOffset = sliderSetting.slideWidth || defaultSetting.slideWidth;
    const slideHeight = sliderSetting.slideHeight || defaultSetting.slideHeight; 
    const maxSlides = sliderSetting.maxSlides || defaultSetting.maxSlides;
    const slides = customSlider.querySelectorAll("div");
    const TotalLength = slides.length * slidesOffset;

    buildSlider(slidesOffset, slideHeight, slides);

    let outerContainer = customSlider.querySelector(".outer_container");
    outerContainer.style.width = `${slidesOffset * maxSlides}px`;


    let nextSlideBtn = document.querySelector(".custom_slider .next_slide");
    let prevSlideBtn = document.querySelector(".custom_slider .prev_slide");

    nextSlideBtn.addEventListener("click", nextSlideClick);
    prevSlideBtn.addEventListener("click", prevSlideClick);
    
    function nextSlideClick() {
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        if ( (moveNum - slidesOffset) > -TotalLength ) {
            moveNum = moveNum - slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        }
    }
    
    function prevSlideClick() {
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        if (moveNum < 0) {
            moveNum = moveNum + slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        }
    }
}

function buildSlider(slideWidth, slideHeight, slides) {
    slides.forEach (item => {
        item.classList.add("one_slide");
        item.style.width = `${slideWidth}px`;
        item.style.height = `${slideHeight}px`;
    });

    customSlider.innerHTML = `
        <div class="outer_container">
            <div class="inner_container">
                ${customSlider.innerHTML}
            </div>
            <div class="navs">
                <a href="#" class="prev_slide"><</a>
                <a href="#" class="next_slide">></a>
            </div>`
}






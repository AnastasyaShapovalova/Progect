const defaultSettings = {
    slideWidth: 300,
    slideHeight: '',
    maxSlides: 1,
    navs: true,
    loop: true,
    autoplay: true,
} 

let customSliderArr = document.querySelectorAll('.custom_slider');

customSliderArr.forEach(item => item.customSlider = function(sliderSettings = {}) {
    let moveNum = 0;
    const slidesOffset = sliderSettings.slideWidth || defaultSettings.slideWidth;
    const slideHeight = sliderSettings.slideHeight || defaultSettings.slideHeight;
    const maxSlides = sliderSettings.maxSlides || defaultSettings.maxSlides;
    const slides = item.querySelectorAll('div');
    const TotalLength = slides.length * slidesOffset;
    const navs = (sliderSettings.navs !== undefined) ? sliderSettings.navs : defaultSettings.navs;
    const loop = (sliderSettings.loop !== undefined) ? sliderSettings.loop : defaultSettings.loop;
    const autoplay = (sliderSettings.autoplay !== undefined)
        ? sliderSettings.autoplay : defaultSettings.autoplay;

    buildSlider(item, slidesOffset, slideHeight, slides, navs);

    let outerContainer = item.querySelector('.outer_container');
    outerContainer.style.width = `${slidesOffset * maxSlides}px`;
    
    if (navs) {
        let nextSlideBtn = item.querySelector('.next_slide');
        let prevSlideBtn = item.querySelector('.prev_slide');
    
        nextSlideBtn.addEventListener('click', nextSlideClick);
        prevSlideBtn.addEventListener('click', prevSlideClick);
    }
    
    function nextSlideClick(e) {
        e.preventDefault();
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        if ( (moveNum - slidesOffset) > -TotalLength ) {
            moveNum = moveNum - slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else if (loop) {
            moveNum = 0;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        }
    }
    
    function prevSlideClick(e) {
        e.preventDefault();
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        if (moveNum < 0) {
            moveNum = moveNum + slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else if(loop){
            moveNum = - (TotalLength - slidesOffset);
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        }
    }

    if (autoplay) {
        function moveSlide() {
            moveNum = moveNum - slidesOffset;
            let innerContainer = item.querySelector(".inner_container")
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        }
        setInterval(moveSlide, 4000);
    }
});
    function buildSlider(slider, slideWidth, slideHeight, slides, navs) {
    slides.forEach (item => {
        item.classList.add("one_slide");
        item.style.width = `${slideWidth}px`;
        item.style.height = `${slideHeight}px`;
    });

    slider.innerHTML = `
        <div class="outer_container">
            <div class="inner_container">
                ${slider.innerHTML}
            </div>
        </div>`;
            if (navs) {
                slider.innerHTML = slider.innerHTML + `<div class = "navs">
                    <a href = "#" class = "prev_slide" ><</a> 
                    <a href = "#" class = "next_slide" >></a>
        </div>`;
            }      
        }

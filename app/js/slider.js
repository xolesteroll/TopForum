const reviewSlides = document.querySelectorAll('.reviews__slider-item'),
        reviewNext = document.querySelector('.reviews__slider-next'),
        reviewPrev = document.querySelector('.reviews__slider-prev'),
        reviewSliderWrapper = document.querySelector('.reviews__slider-wrapper'),
        reviewSliderInner = document.querySelector('.reviews__slider-inner'),
        marginLeft = +window.getComputedStyle(reviewSlides[1]).marginLeft.slice(0, (window.getComputedStyle(reviewSlides[1]).marginLeft.length - 2)),
        wrapperWidth = window.getComputedStyle(reviewSliderWrapper).width;
    let reviewOffset = 0;

    const slides = document.querySelectorAll('.banner__slider-item'),
    prev = document.querySelector('.banner__slider-prev'),
    next = document.querySelector('.banner__slider-next'),
    slidesWrapper = document.querySelector('.banner__slider-wrapper'),
    slidesField = document.querySelector('.banner__slider-inner'),
    bannerItemMarginLeft = +window.getComputedStyle(slides[1]).marginLeft.slice(0, window.getComputedStyle(slides[1]).marginLeft.length -2),
    width = window.getComputedStyle(slidesWrapper).width;

let offset = 0;

sliderInit(slides, prev, next, slidesWrapper, slidesField, bannerItemMarginLeft, width, offset, 1);
sliderInit(reviewSlides, reviewPrev, reviewNext, reviewSliderWrapper, reviewSliderInner, marginLeft, wrapperWidth, reviewOffset, 2);

function sliderInit(slides, prev, next, slidesWindow, slidesField, marginLeft, slidesWindowWidth, offset, slidesToShow){
    offset = 0;
    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        if (marginLeft != 0){
            slide.style.width = +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) / slidesToShow - (marginLeft / 2) + 'px';
        } else {
            slide.style.width = +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) / slidesToShow + 'px';
        }
    });

    next.addEventListener('click', () => {
        if (marginLeft != 0){
            if (offset >= (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1))){
                offset = 0;
            } else {
                offset += +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft;
            }
        } else {
            if (offset >= (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1))){
                offset = 0;
            } else {
                offset += +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2);
            }
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        
    });

    prev.addEventListener('click', () => {
        if (marginLeft != 0){
            if (offset == 0){
                offset = (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft) * ((Math.round(slides.length) / slidesToShow) - 1);
            } else {
                offset -= +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft;
            }
        } else {
            if (offset == 0){
                offset = +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1);
            } else {
                offset -= +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2);
            }
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        
    });
} 
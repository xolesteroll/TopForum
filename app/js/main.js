// $(function() {
//     $('.banner__slider').slick();
// });

// Banner Slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.banner__slider-item'),
        prev = document.querySelector('.banner__slider-prev'),
        next = document.querySelector('.banner__slider-next'),
        slidesWrapper = document.querySelector('.banner__slider-wrapper'),
        slidesField = document.querySelector('.banner__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';



    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    //Reviews Slider

    const reviewSlides = document.querySelectorAll('.reviews__slider-item'),
        reviewNext = document.querySelector('.reviews__slider-next'),
        reviewPrev = document.querySelector('.reviews__slider-prev'),
        reviewSliderWrapper = document.querySelector('.reviews__slider-wrapper'),
        reviewSliderInner = document.querySelector('.reviews__slider-inner'),
        wrapperWidth = window.getComputedStyle(reviewSliderWrapper).width;
    let reviewOffset = 0;
    console.log(wrapperWidth);

    reviewSliderInner.style.width = 100 * reviewSlides.length + '%';

    reviewSlides.forEach(slide => {
        slide.style.width = +wrapperWidth.slice(0, wrapperWidth.length - 2) / 2 - 23 + 'px';
    });

    reviewNext.addEventListener('click', () => {
        if (reviewOffset >= (+wrapperWidth.slice(0, wrapperWidth.length - 2) * ((Math.round(reviewSlides.length) / 2) - 1))){
            reviewOffset = 0;
        } else {
            reviewOffset += +wrapperWidth.slice(0, wrapperWidth.length - 2) + 46;
        }

        reviewSliderInner.style.transform = `translateX(-${reviewOffset}px)`;

        console.log(+wrapperWidth.slice(0, wrapperWidth.length - 2) + 46);
    });

    reviewPrev.addEventListener('click', () => {
        if (reviewOffset ==  0){
            reviewOffset = (+wrapperWidth.slice(0, wrapperWidth.length - 2) + 46) * ((Math.round(reviewSlides.length) / 2) - 1);
        } else {
            reviewOffset -= +wrapperWidth.slice(0, wrapperWidth.length - 2) + 46;
        }

        reviewSliderInner.style.transform = `translateX(-${reviewOffset}px)`;

        console.log(+wrapperWidth.slice(0, wrapperWidth.length - 2) * ((Math.round(reviewSlides.length) / 2) - 1));
    });



});

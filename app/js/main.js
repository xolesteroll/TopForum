// $(function() {
//     $('.banner__slider').slick();
// });

// Banner Slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.banner__slider-item'),
        prev = document.querySelector('.slider__prev'),
        next = document.querySelector('.slider__next'),
        slidesWrapper = document.querySelector('.banner__slider-wrapper'),
        slidesField = document.querySelector('.banner__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    


    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length -2) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += +width.slice(0, width.length -2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0){
            offset = +width.slice(0, width.length -2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length -2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });



});

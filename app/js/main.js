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
        marginLeft = +window.getComputedStyle(reviewSlides[1]).marginLeft.slice(0, (window.getComputedStyle(reviewSlides[1]).marginLeft.length - 2)),
        wrapperWidth = window.getComputedStyle(reviewSliderWrapper).width;
    let reviewOffset = 0;

    reviewSliderInner.style.width = 100 * reviewSlides.length + '%';

    reviewSlides.forEach(slide => {
        slide.style.width = +wrapperWidth.slice(0, wrapperWidth.length - 2) / 2 - (marginLeft / 2) + 'px';
    });

    reviewNext.addEventListener('click', () => {
        if (reviewOffset >= (+wrapperWidth.slice(0, wrapperWidth.length - 2) * ((Math.round(reviewSlides.length) / 2) - 1))){
            reviewOffset = 0;
        } else {
            reviewOffset += +wrapperWidth.slice(0, wrapperWidth.length - 2) + marginLeft;
        }

        reviewSliderInner.style.transform = `translateX(-${reviewOffset}px)`;

        console.log(+wrapperWidth.slice(0, wrapperWidth.length - 2) + marginLeft);
    });

    reviewPrev.addEventListener('click', () => {
        if (reviewOffset ==  0){
            reviewOffset = (+wrapperWidth.slice(0, wrapperWidth.length - 2) + marginLeft) * ((Math.round(reviewSlides.length) / 2) - 1);
        } else {
            reviewOffset -= +wrapperWidth.slice(0, wrapperWidth.length - 2) + marginLeft;
        }

        reviewSliderInner.style.transform = `translateX(-${reviewOffset}px)`;

        console.log(+wrapperWidth.slice(0, wrapperWidth.length - 2) * ((Math.round(reviewSlides.length) / 2) - 1));
    });

    //Modal

    const modal = document.querySelector('.modal'),
        closeBtns = document.querySelectorAll('.modal__close'),
        openBtns = document.querySelectorAll('.about__subscribe');

    function openModal(window){
        openBtns.forEach(btn => {
            btn.addEventListener('click', () =>{
                window.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    }
    function closeModal(window){
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () =>{
                window.style.display = 'none';
                document.body.style.overflow = '';
            });
        });

    }
    openModal(modal);
    closeModal(modal);

});

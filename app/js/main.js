// $(function() {
//     $('.banner__slider').slick();
// });


document.addEventListener("DOMContentLoaded", function () {
    // Reviews Slider
    const reviewSlides = document.querySelectorAll('.reviews__slider-item'),
        reviewNext = document.querySelector('.reviews__slider-next'),
        reviewPrev = document.querySelector('.reviews__slider-prev'),
        reviewSliderWrapper = document.querySelector('.reviews__slider-wrapper'),
        reviewSliderInner = document.querySelector('.reviews__slider-inner'),
        marginLeft = +window.getComputedStyle(reviewSlides[1]).marginLeft.slice(0, (window.getComputedStyle(reviewSlides[1]).marginLeft.length - 2)),
        wrapperWidth = window.getComputedStyle(reviewSliderWrapper).width;
    let reviewOffset = 0;

    // Banner slider
    const slides = document.querySelectorAll('.banner__slider-item'),
        prev = document.querySelector('.banner__slider-prev'),
        next = document.querySelector('.banner__slider-next'),
        slidesWrapper = document.querySelector('.banner__slider-wrapper'),
        slidesField = document.querySelector('.banner__slider-inner'),
        bannerItemMarginLeft = +window.getComputedStyle(slides[1]).marginLeft.slice(0, window.getComputedStyle(slides[1]).marginLeft.length - 2),
        width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;

    // CLients Slider

    const clientsSlides = document.querySelectorAll('.clients__slider-item'),
        clientsNext = document.querySelector('.clients__slider-next'),
        clientsPrev = document.querySelector('.clients__slider-prev'),
        clientsSliderWrapper = document.querySelector('.clients__slider-wrapper'),
        clientsSliderInner = document.querySelector('.clients__slider-inner'),
        clientsItemMarginLeft = +window.getComputedStyle(clientsSlides[1]).marginLeft.slice(0, window.getComputedStyle(clientsSlides[1]).marginLeft.length - 2),
        clientsWrapperWidth = window.getComputedStyle(clientsSliderWrapper).width;
    let clientsOffset = 0;
    

    sliderInit(clientsSlides, clientsPrev, clientsNext, clientsSliderWrapper, clientsSliderInner, clientsItemMarginLeft, clientsWrapperWidth, clientsOffset, 6);
    sliderInit(slides, prev, next, slidesWrapper, slidesField, bannerItemMarginLeft, width, offset, 1);
    sliderInit(reviewSlides, reviewPrev, reviewNext, reviewSliderWrapper, reviewSliderInner, marginLeft, wrapperWidth, reviewOffset, 2);

    // Slider Init Function
    function sliderInit(slides, prev, next, slidesWindow, slidesField, marginLeft, slidesWindowWidth, offset, slidesToShow) {
        offset = 0;
        slidesField.style.width = 100 * slides.length + '%';

        slides.forEach(slide => {
            if (marginLeft != 0) {
                slide.style.width = (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) - (marginLeft * (slidesToShow - 1))) / slidesToShow  + 'px';
            } else {
                slide.style.width = +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) / slidesToShow + 'px';
            }
        });

        next.addEventListener('click', () => {
            if (marginLeft != 0) {
                if (offset >= (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1))) {
                    offset = 0;
                } else {
                    offset += +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft;
                }
            } else {
                if (offset >= (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1))) {
                    offset = 0;
                } else {
                    offset += +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2);
                }
            }
            slidesField.style.transform = `translateX(-${offset}px)`;

        });

        prev.addEventListener('click', () => {
            if (marginLeft != 0) {
                if (offset == 0) {
                    offset = (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft) * ((Math.round(slides.length) / slidesToShow) - 1);
                } else {
                    offset -= +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft;
                }
            } else {
                if (offset == 0) {
                    offset = +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1);
                } else {
                    offset -= +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2);
                }
            }
            slidesField.style.transform = `translateX(-${offset}px)`;

        });
    }

    //Modal

    const modal = document.querySelector('.modal'),
        closeBtns = document.querySelectorAll('.modal__close'),
        subscribeCloseBtn = document.querySelector('[data-subscribe-close]'),
        openBtns = document.querySelectorAll('.about__subscribe');



    function openModal(window) {
        window.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    function closeModal(window) {
        window.style.display = 'none';
        document.body.style.overflow = '';
    }
    function fadeBG(window, closeBtnData, event, eventType) {
        if (event.target != window && event.target != closeBtnData && eventType == 'mouseover') {
            window.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            closeBtnData.style.cssText = 'transform: scale(1); color: rgba(255, 255, 255, 0.8)';
        } else {
            window.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            closeBtnData.style.cssText = 'transform: scale(1.3); color: rgba(0, 0, 0, 0.8)';
        }
        if (event.target == window && eventType == 'mouseout') {
            window.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            closeBtnData.style.cssText = 'transform: scale(1); color: rgba(255, 255, 255, 0.8)';
        }
    }
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(modal);
        });
    });
    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal(modal);
        }
    });
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(modal);
        });
    });
    modal.addEventListener('mouseover', (e) => {
        fadeBG(modal, subscribeCloseBtn, e, e.type);

    });
    modal.addEventListener('mouseout', (e) => {
        fadeBG(modal, subscribeCloseBtn, e, e.type);

    });

});

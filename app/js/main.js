


document.addEventListener("DOMContentLoaded", function () {

    const bannerSlider = document.querySelector('.banner__slider');
    const reviewsSlider = document.querySelector('.reviews__slider');
    const clientsSlider = document.querySelector('.clients__slider');
    
    sliderInit(bannerSlider, 1, 1);
    sliderInit(reviewsSlider, 2, 1);
    sliderInit(clientsSlider, 6, 2);

    // Slider Init Function
    function sliderInit(slider, slidesToShow = 1, slidesToScroll = 1) {
        const slides = slider.querySelectorAll('[data-slider-slide]'),
        prev = slider.querySelector('[data-slider-prev]'),
        next = slider.querySelector('[data-slider-next]'),
        slidesWindow = slider.querySelector('[data-slider-wrapper]'),
        slidesField = slider.querySelector('[data-slider-inner]'),
        marginLeft = parseInt(window.getComputedStyle(slides[1]).marginLeft),
        slidesWindowWidth = parseInt(window.getComputedStyle(slidesWindow).width);
  
        let offset = 0;

        slidesField.style.width = ((slidesWindowWidth - (marginLeft * (slidesToShow - 1))) * (slides.length / slidesToShow)) + (marginLeft * (slides.length - 1)) + 'px';
        slidesField.style.display = 'flex';
        slidesWindow.style.overflow = 'hidden';
        
        let slidesFieldWidth = parseInt(window.getComputedStyle(slidesField).width);
    
        slides.forEach(slide => {
            if (marginLeft != 0) {
                slide.style.width = (slidesWindowWidth - (marginLeft * (slidesToShow - 1))) / slidesToShow  + 'px';
            } else {
                slide.style.width = slidesWindowWidth / slidesToShow + 'px';
            }
        });
    
        next.addEventListener('click', () => {
            if (marginLeft != 0) {
                if (offset >= (slidesWindowWidth * ((Math.round(slides.length) / slidesToShow) - 1))) {
                    offset = 0;
                } else {
                    offset += ((slidesWindowWidth - (marginLeft * (slidesToShow - 1))) / slidesToShow) * slidesToScroll + (marginLeft * slidesToScroll);
                }
            } else {
                if (offset >= (slidesWindowWidth * ((Math.round(slides.length) / slidesToShow) - 1))) {
                    offset = 0;
                } else {
                    offset += slidesWindowWidth / slidesToShow * slidesToScroll;
                }
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
    
        });
    
        prev.addEventListener('click', () => {
            if (marginLeft != 0) {
                if (offset == 0) {
                    offset = slidesFieldWidth - slidesWindowWidth;
                } else {
                    offset -= ((slidesWindowWidth - (marginLeft * (slidesToShow - 1))) / (slidesToShow)) * slidesToScroll + (marginLeft * slidesToScroll);
                }
            } else {
                if (offset == 0) {
                    offset = slidesWindowWidth * ((Math.round(slides.length) / slidesToShow) - 1);
                } else {
                    offset -= slidesWindowWidth / slidesToShow * slidesToScroll;
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
            closeBtnData.style.cssText = 'font-size: 70px; color: rgba(0, 0, 0, 0.8); transform: translateY(-10%)';
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

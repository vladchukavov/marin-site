function useSlider(sliderSelector) {
    let slides = document.querySelector(sliderSelector).children;
    addSlidesClass(slides);
    createButtons(sliderSelector);
}
function addSlidesClass (slides) {
    Array.from(slides).forEach((slide) => {
        slide.classList.add('slider-slide');
    });
    slides[0].classList.add('active');
}
function createButtons(sliderSelector) {
    let reviewsSection = document.querySelector(sliderSelector);

    let leftVector = document.createElement('button');
    let rightVector = document.createElement('button');

    leftVector.classList.add('reviews__btn-left');
    rightVector.classList.add('reviews__btn-right');

    let leftVectorIcon = document.createElement('img');
    let rightVectorIcon = document.createElement('img');
    leftVectorIcon.src = 'img/vector-left.svg';
    rightVectorIcon.src = 'img/vector-right.svg';

    leftVector.appendChild(leftVectorIcon);
    rightVector.appendChild(rightVectorIcon);

    reviewsSection.appendChild(leftVector).addEventListener('click', () => {
        changeActiveSlide('leftVector', reviewsSection)
    });
    reviewsSection.appendChild(rightVector).addEventListener('click', () => {
        changeActiveSlide('rightVector', reviewsSection)
    });
}
function changeActiveSlide (direction, slider) {
    let currentIndex = 0;
    let nextIndex;
    let slides = Array.from(slider.querySelectorAll('.slider-slide'))
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index
            slide.classList.remove('active')
        }
    })
    if (direction === 'leftVector') {
        nextIndex = currentIndex <= 0 ? slides.length-1 : currentIndex-1
    } else {
        nextIndex = currentIndex+1 >= slides.length ? 0 : currentIndex+1
    }
    slides[nextIndex].classList.add('active')
}

useSlider ("#slider")
useSlider ("#slider1")
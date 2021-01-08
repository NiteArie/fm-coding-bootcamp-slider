const app = (() => {
    let _prevButton = document.querySelector(".container__main__card__switch__image:nth-child(1)");
    let _nextButton = document.querySelector(".container__main__card__switch__image:nth-child(2)");
    const _cards = document.querySelectorAll(".container__main__card");
    let _currentSlideCount = 0;
    let _maxSlideCount = _cards.length - 1;

    initPrevButton();
    initNextButton();

    function initPrevButton() {
        _prevButton.addEventListener("click", previousSlide);
    }

    function initNextButton() {
        _nextButton.addEventListener("click", nextSlide);
    }

    function previousSlide(event) {
        processSlideShow(false);
    }

    function nextSlide(event) {
        processSlideShow(true);
    }

    function processSlideShow(nextDirection) {
        showSlide(nextDirection);
        removePrevListener();
        removeNextListener();
        updatePrevButton();
        updateNextButton();
        initPrevButton();
        initNextButton();
    }

    function updatePrevButton() {
        _prevButton = document.querySelector(".container__main__card:not(.hidden) .container__main__card__switch__image:nth-child(1)");
    }

    function updateNextButton() {
        _nextButton = document.querySelector(".container__main__card:not(.hidden) .container__main__card__switch__image:nth-child(2)");
    }

    function removePrevListener() {
        _prevButton.removeEventListener("click", previousSlide);
    }

    function removeNextListener() {
        _nextButton.removeEventListener("click", nextSlide);
    }

    function showSlide(upperDirection) {
        if (upperDirection && checkMaxCurrentSlideCount()) {
            _currentSlideCount += 1;
        } else {
            if (checkMaxCurrentSlideCount()) {
                _currentSlideCount = _maxSlideCount;
            } else {
                _currentSlideCount -= 1;
            }
        }

        toggleSlides();
    }

    function toggleSlides() {
        for ( let i = 0; i <= _maxSlideCount; i++) {
            _cards[i].classList.add("hidden");
        }
        _cards[_currentSlideCount].classList.remove("hidden");
    }

    function checkMaxCurrentSlideCount() {
        return _currentSlideCount !== _maxSlideCount;
    }

})()
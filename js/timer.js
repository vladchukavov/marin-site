let counterNumbers = Array.from(document.querySelectorAll('.countedNumber'));
function startCount(counter) {
    let currentValue = 0;
    let max = +counter.getAttribute('data-value');
    let isAnimated = false;
    let interval = setInterval(() => {
        if (currentValue >= max) {
            clearInterval(interval);
            isAnimated = true
        }
        counter.textContent = currentValue;
        currentValue++;
    }, 1000 / max);
}
document.addEventListener('scroll', function () {
    counterNumbers.forEach((counterNumber) => {
        const rect = counterNumber.getBoundingClientRect();
        const isElementVisible = rect.top < window.innerHeight * 0.75;
        if (isElementVisible && !counterNumber.classList.contains('animated')) {
            counterNumber.classList.add('animated');
            startCount(counterNumber);
        }
    });
});

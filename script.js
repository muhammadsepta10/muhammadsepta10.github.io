document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.progress');

    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = value + '%'; // Set the width of the progress bar based on the data-value
    });
     const slider = document.querySelector('.project-slider');
    const cards = document.querySelectorAll('.project-card');
    const cardWidth = cards[0].offsetWidth;
    const totalCards = cards.length;

    // Clone first and last card
    const firstCard = cards[0].cloneNode(true);
    const lastCard = cards[totalCards - 1].cloneNode(true);

    // Add clones to the beginning and end
    slider.insertBefore(lastCard, cards[0]);
    slider.appendChild(firstCard);

    let currentPosition = -cardWidth; // Start at the first card (after the clone)
    slider.style.transform = `translateX(${currentPosition}px)`;

    function moveSlider() {
        currentPosition -= 2;  // Adjust speed by changing this value
        slider.style.transform = `translateX(${currentPosition}px)`;

        if (currentPosition <= -cardWidth * totalCards) {
            // Disable transition and reset to the first actual card
            slider.style.transition = 'none';
            currentPosition = -cardWidth;
            slider.style.transform = `translateX(${currentPosition}px)`;

            // Force reflow to apply the immediate position change
            slider.offsetHeight;

            // Re-enable transition for smooth sliding
            slider.style.transition = 'transform 0.5s ease-in-out';
        }

        requestAnimationFrame(moveSlider);
    }

    moveSlider();
});
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const music = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicToggle');
    let currentPage = 0;

    // Function to update page visibility
    function updatePage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.style.visibility = 'visible';
                page.style.transform = 'rotateY(0deg)';
            } else {
                page.style.visibility = 'hidden';
                page.style.transform = 'rotateY(-180deg)';
            }
        });
    }

    // Show initial page
    updatePage(currentPage);

    // Handle mouse click to flip pages
    document.addEventListener('click', (event) => {
        if (event.clientX < window.innerWidth / 2) {
            // Clicked on the left side
            if (currentPage > 0) {
                pages[currentPage].style.transform = 'rotateY(-180deg)';
                currentPage--;
                pages[currentPage].style.transform = 'rotateY(0deg)';
                updatePage(currentPage);
            }
        } else {
            // Clicked on the right side
            if (currentPage < pages.length - 1) {
                pages[currentPage].style.transform = 'rotateY(-180deg)';
                currentPage++;
                pages[currentPage].style.transform = 'rotateY(0deg)';
                updatePage(currentPage);
            }
        }
    });

    // Handle keyboard arrow keys
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            if (currentPage > 0) {
                pages[currentPage].style.transform = 'rotateY(-180deg)';
                currentPage--;
                pages[currentPage].style.transform = 'rotateY(0deg)';
                updatePage(currentPage);
            }
        } else if (event.key === 'ArrowRight') {
            if (currentPage < pages.length - 1) {
                pages[currentPage].style.transform = 'rotateY(-180deg)';
                currentPage++;
                pages[currentPage].style.transform = 'rotateY(0deg)';
                updatePage(currentPage);
            }
        }
    });

    // Music control
    musicButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicButton.textContent = 'Pause Music';
        } else {
            music.pause();
            musicButton.textContent = 'Play Music';
        }
    });

    // Optional: Automatically play music on page load
    music.play();
});

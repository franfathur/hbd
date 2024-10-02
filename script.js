const correctPassword = "love"; // Set your developer password here

function checkDate() {
    const today = new Date();
    const currentDay = today.getDate();
    const specialDate = new Date(today.getFullYear(), 9, 3); // 9 is October (0-based index)
    const timeDiff = specialDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Calculate days difference

    // Highlight current date
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        if (parseInt(day.textContent) === currentDay) {
            day.classList.add('current-day');
        }
    });

    // Display days left message
    if (daysDiff > 0) {
        document.querySelector('.days-left').textContent = `There are ${daysDiff} days left until 3rd October.`;
        document.getElementById('passwordSection').classList.add('active');
    } else if (daysDiff === 0) {
        startCountdown();
    } else {
        document.querySelector('.days-left').textContent = `3rd October has passed.`;
        document.getElementById('passwordSection').classList.add('active');
    }
}

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let countdownTime = 10; // 10 seconds countdown

    document.getElementById('popup').style.display = 'block'; // Show popup with countdown

    const countdownInterval = setInterval(() => {
        countdownElement.textContent = countdownTime;
        countdownTime--;

        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Open!";
            setTimeout(() => {
                window.location.href = "dairy.html"; // Replace with your diary website file name
            }, 1000); // Redirect after 1 second
        }
    }, 1000);
}

function checkPassword() {
    const inputPassword = document.getElementById('passwordInput').value;
    if (inputPassword === correctPassword) {
        window.location.href = "dairy.html"; // Replace with your diary website file name
    } else {
        alert("Incorrect password. Access denied.");
    }
}

document.addEventListener('DOMContentLoaded', checkDate);
document.getElementById('passwordSubmit').addEventListener('click', checkPassword);

function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset the timer if needed
        }
    }, 1000);
}

window.onload = function () {
    let countdownTimer = 3600; // 1 hour in seconds
    let display = document.querySelector('#countdown-timer');
    startCountdown(countdownTimer, display);
};


AOS.init();


document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("March 11, 2026 19:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = "<p>Evento já começou!</p>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="countdown-box"><span>${days}</span>Days</div>
      <div class="countdown-box"><span>${hours}</span>Hours</div>
      <div class="countdown-box"><span>${minutes}</span>Min</div>
      <div class="countdown-box"><span>${seconds}</span>Seg</div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

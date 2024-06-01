const TimerHour = document.getElementById("timer-hour");
const TimerMinute = document.getElementById("timer-minute");
const TimerSecond = document.getElementById("timer-second");

let TimerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  TimerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(TimerInterval);
}

function resetTimer() {
  clearInterval(TimerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  renderTime();
}

function updateTimer() {
  seconds++;
  renderSecondDigits();

  if (seconds == 60) {
    minutes++;
    seconds = 0;
    renderMinutDigits();

    if (minutes == 60) {
      hours++;
      minutes = 0;
      renderHourDigits();
    }
  }
}

function padNumber(number) {
  if (number == 60) return "00";
  else if (number < 10) return "0" + number;
  else return number;
}

function renderHourDigits() {
  TimerHour.innerText = padNumber(hours);
}

function renderMinutDigits() {
  TimerMinute.innerText = padNumber(minutes);
}

function renderSecondDigits() {
  TimerSecond.innerText = padNumber(seconds);
}

function renderTime() {
  renderHourDigits();
  renderMinutDigits();
  renderSecondDigits();
}

const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const start = document.getElementById('start-timer')
const pause = document.getElementById('pause-timer')
const reset = document.getElementById('reset-timer')

const display = document.getElementById('display')

let interval = null;
let total = 0;

totalvalue = () => {
    total = Number(hour.value)*3600 + Number(minutes.value)*60 + Number(seconds.value);

}

Timer = () => {
totalvalue();
total --;

if(total >= 0)
{
let hr = Math.floor(total/3600);
let min = Math.floor(total/60 - (hr*60));
let sec = total - ((hr*3600) + (min*60));

hour.value = hr;
minutes.value = min;
seconds.value = sec;

}
else{
    display.innerText = "Timer Over !";
    // clearInterval(interval);
}
}

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(Timer, 1000);

  display.innerText = "Timer Started";
});

pause.addEventListener("click", () => {
  clearInterval(interval);

  display.innerText = "Timer Paused !";
});


reset.addEventListener("click", () => {
  clearInterval(interval);
  hour.value = 0;
  minutes.value = 0;
  seconds.value = 0;

  display.innerText = "Timer Over !";
   });
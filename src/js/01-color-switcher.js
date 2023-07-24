

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let timerId = null;

startBtn.addEventListener("click", () => {
  stopBtn.removeAttribute("disabled");
  timerId = delay(1000,() => {
    const color = getRandomHexColor()
    body.style.backgroundColor = color;
  })
   startBtn.setAttribute("disabled", true);
});


stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
  clearInterval(timerId);
  alert("The timer has been stoppped already!") 
  stopBtn.setAttribute("disabled", true); //
});


function delay(time, fn) {
    return setInterval(fn, time);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
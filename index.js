const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const milisecond = document.querySelector(".milisecond")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

let minutes = 0
let seconds = 0
let miliseconds = 0
let interval

start.addEventListener("click", () => {

    if (!interval) {
        interval = setInterval(() => {
            miliseconds++;
            if (miliseconds === 100) {
                miliseconds = 0
                seconds++;
            }

            if (seconds === 60) {
                seconds = 0
                minutes++;
            }

            minute.textContent = String(minutes).padStart(2, "0") + " : "
            second.textContent = String(seconds).padStart(2, "0") + " : "
            milisecond.textContent = String(miliseconds).padStart(2, "0")


        }, 10);
    }
})


stop.addEventListener("click", () => {
    clearInterval(interval)
    interval = null
})


reset.addEventListener("click", () => {
    clearInterval(interval)
    interval = null

    minutes = 0
    seconds = 0
    miliseconds = 0

    minute.textContent = String(minutes).padStart(2, "0") + " : "
    second.textContent = String(seconds).padStart(2, "0") + " : "
    milisecond.textContent = String(miliseconds).padStart(2, "0")
})
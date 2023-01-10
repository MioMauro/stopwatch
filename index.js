const seconds = document.getElementById("seconds")
const milliSeconds = document.getElementById("milliseconds")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let sec = 0
let millisecond = 0 //millisec

let timeInterval

const timer = () => {
    millisecond++

    if(millisecond < 9){
        milliSeconds.innerHTML = "0" + millisecond
    }
    if(millisecond > 9){
        milliSeconds.innerHTML = millisecond
    }
    if(millisecond > 99){
        sec++
        seconds.innerHTML = "0" + sec
        millisecond = 0
        milliSeconds.innerHTML = "0" + 0
    }
    if(sec > 9){
        seconds.innerHTML = sec
    }
}

// start
startBtn.addEventListener('click', () => {
    timeInterval = setInterval(timer, 10)
})

// stop
stopBtn.addEventListener('click', () => {
    clearInterval(timeInterval)
})

// reset
resetBtn.addEventListener('click', () => {
    clearInterval(timeInterval)
    sec = "00"
    millisecond="00"
    seconds.innerHTML = sec
    milliSeconds.innerHTML = millisecond    
})
    
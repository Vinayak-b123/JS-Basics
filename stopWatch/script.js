console.log("Hello")
let seconds = 0;
let interval = NaN


function showtime() {
    sec = String(seconds%60).padStart(2, "0");
    min = String(Math.floor((seconds / 60)%60)).padStart(2, "0");
    hour = String(Math.floor(seconds / 3600)).padStart(2, "0");
    time.innerText = `${hour}:${min}:${sec}`
}

const time = document.getElementById("time")
showtime()


function startClock() {
    clearInterval(interval);
    interval = setInterval(() => {
        seconds++
        showtime()
    }, 1000)
    
}

function stopClock(){
    clearInterval(interval)
}

function resetClock(){
    stopClock()
    seconds = 0;
    showtime()
}
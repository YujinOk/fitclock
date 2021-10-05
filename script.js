"use strict";
const timer = document.querySelector(".timer");
const resetBtn = document.querySelector("#reset");
const stopBtn = document.querySelector("#stop");
const pauseBtn = document.querySelector("#pause");
const startBtn = document.querySelector("#start");
const musicBtn = document.querySelector("#music");
const soundBtn = document.querySelector("#soundEffect");

// 1. Timer
// 2. RESET: remove all the records saved
// 3. STOP: turns it off
// 4. PAUSE: pause / but second click => 'resume'
// 5. START: play
// 6. MUSIC: being able to play music via itunes etc
// 7. SOUNDEFFECT: funny sounds from internet while playing the stop watch
// 8. REPS: how many reps
// 8. DURATION: how long you want to exercie per session?

function stopWatch() {
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    timer.innerText = `${hours}: ${minute}: ${second}`;
    setInterval(stopWatch, 1000);
}

const stop = () => {
    timer.innerText = "00:00:00";
    clearInterval(stopWatch, 1000);
};

startBtn.addEventListener("click", stopWatch);

stopBtn.addEventListener("click", stop);

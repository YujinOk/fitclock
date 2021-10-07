"use strict";
const timerScreen = document.querySelector(".timer");
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

let time = 60;
let isTimerStop = false;

const getTimer = () => {
    isTimerStop = false;
    const count = setInterval(() => {
        if (isTimerStop) {
            clearInterval(count);
            timerScreen.innerText = time;
        } else {
            time--;
        }
        timerScreen.innerText = time;
    }, 1000);
};

const stop = () => {
    isTimerStop = true;
};

startBtn.addEventListener("click", getTimer);

stopBtn.addEventListener("click", stop);

// function startTimer(duration, display) {
//     let timer = duration,
//         minutes,
//         seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector("#time");
//     startTimer(fiveMinutes, display);
// };

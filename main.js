import {Charmander} from './charmander.js'
import {Squirtle} from './squirtle.js'
import {Bulbasaur} from './bulbasaur.js'

const body = document.querySelector("body")
const timerDisplay = document.getElementById('timerDisplay');
const sessionLabel = document.getElementById('sessionLabel');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const sessionsCount = document.getElementById('sessionsCount');


const customTimer = function (interval = 25) {
    return interval
}
alert('bruh')
let customTime = prompt("How many minutes would you like your pomodoro timer to be")

let timeLeft = customTime * 60
timerDisplay.textContent = `${customTime}:00`












let isRunning = false;
let isPaused = false;
let interval = null;
let sessionsCompleted = 0;
let isBreak = false;

// Frank - Add randomisation of theme at start

let theme = ["squirtle", "bulbasaur", "charmander"][Math.floor(Math.random() * 3)];
switchTheme(theme)


startBtn.addEventListener('click', () => {
    startTimer()
})

pauseBtn.addEventListener('click', () => {
    pauseTimer()
})

resetBtn.addEventListener('click', () => {
    resetTimer()
})

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        isPaused = false;
        startBtn.disabled = true;
        pauseBtn.disabled = false;

        interval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                // Timer finished!
                clearInterval(interval);
                timerComplete();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        isPaused = true;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    isPaused = false;
    timeLeft = isBreak ? 5 * 60 : 25 * 60;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}


function timerComplete() {
    if (!isBreak) {
        // Focus session complete - show pack opening!
        sessionsCompleted++;
        sessionsCount.textContent = sessionsCompleted;
        // alert('🎉 Focus complete! Time to open a Pokemon pack! 🎴'); Frank - this feature is a not yet.
        
        // Switch to break
        isBreak = true;
        sessionLabel.textContent = 'Break Time';
        timeLeft = 5 * 60; // 5 minute break
    } else {
        // Break complete
        alert('Break over! Ready for another focus session?');
        isBreak = false;
        sessionLabel.textContent = 'Focus Time';
        timeLeft = 25 * 60;
    }
    
    updateDisplay();
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// FRANK - Make Pokemon animate when timer is running
setInterval(() => {
    if (isRunning && Math.random() > 0.9) {
        canvas.style.transform = 'scaleY(0.8)';
        setTimeout(() => {
            canvas.style.transform = 'scaleY(1)';
        }, 100);
    }
}, 1000);

const squirButton = document.getElementById('squirtle-theme-btn')
const charButton = document.getElementById('charmander-theme-btn')
const bulbButton = document.getElementById('bulbasaur-theme-btn')

squirButton.addEventListener('click', ()=> {
    switchTheme("squirtle")
})

charButton.addEventListener('click', ()=> {
    switchTheme("charmander")
})

bulbButton.addEventListener('click', ()=> {
    switchTheme("bulbasaur")
})


function switchTheme(theme) {
    body.className = theme
    if (theme == "squirtle") {
        const squirtleScreen = Squirtle()
   
    }
    else if  (theme == "charmander") {
        const charmanderScreen = Charmander()
    
    }
    else if (theme == "bulbasaur") {
        const bulbasaurScreen = Bulbasaur()

    }

}
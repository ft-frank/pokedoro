export function createTimer() {

    // DOM elements - declare at top
    const timerDisplay = document.getElementById('timerDisplay');
    const sessionLabel = document.getElementById('sessionLabel');
    const sessionsCount = document.getElementById('sessionsCount');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const canvas = document.getElementById('Canvas');
    const title = document.getElementById('title')
    const ctx = canvas.getContext('2d');
   
    //Frank - initialising values

    let focusTime = Number(localStorage.getItem("focusTime")) ?? 25 * 60;
    let breakTime = Number(localStorage.getItem("breakTime")) ?? 5 * 60;


    // State
    let timeLeft = focusTime
    let isRunning = false;
    let isPaused = false;
    let interval = null;
    let sessionsCompleted = parseInt(localStorage.getItem("sessionsCount")) || 0;
    let isBreak = false;

    function updateSessions() {
        sessionsCompleted++;
        sessionsCount.textContent = sessionsCompleted;
        localStorage.setItem("sessionsCount", sessionsCompleted);
    }

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        title.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} - Pokedoro`;
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
        timeLeft = isBreak ? breakTime : focusTime;
        updateDisplay();
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    function timerComplete() {
        if (!isBreak) {
            updateSessions();
            
            isBreak = true;
            sessionLabel.textContent = 'Break Time';
            timeLeft = breakTime;
        } else {
            isBreak = false;
            sessionLabel.textContent = 'Focus Time';
            timeLeft = focusTime;
        }
        
        updateDisplay();
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    // Pokemon animation
    setInterval(() => {
        if (isRunning && Math.random() > 0.9) {
            canvas.style.transform = 'scaleY(0.8)';
            setTimeout(() => {
                canvas.style.transform = 'scaleY(1)';
            }, 100);
        }
    }, 1000);

    // Initialize
    function initialise() {
        sessionsCount.textContent = sessionsCompleted;
        updateDisplay();
        
        startBtn.addEventListener('click', startTimer);
        pauseBtn.addEventListener('click', pauseTimer);
        resetBtn.addEventListener('click', resetTimer);
    }

    // Call initialize immediately
    initialise();

    // Return public API
    return {
        changeTimer(newFocusMinutes, newBreakMinutes) {
            focusTime = newFocusMinutes * 60;
            breakTime = newBreakMinutes * 60;
            
            if (!isRunning) {
                timeLeft = isBreak ? breakTime : focusTime;
                updateDisplay();
            }
        },
        
        start: startTimer,
        pause: pauseTimer,
        reset: resetTimer,
        
        get time() { return timeLeft; },
        get active() { return isRunning; },
        get sessions() { return sessionsCompleted; }
    };
}
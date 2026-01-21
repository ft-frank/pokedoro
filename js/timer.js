export function createTimer(minutes = 25, focusTime = 25 * 60, breakTime = 5 * 60) {


    const timerDisplay = document.getElementById('timerDisplay');
    const sessionLabel = document.getElementById('sessionLabel');
    const sessionsCount = document.getElementById('sessionsCount');
    const canvas = document.getElementById('Canvas');
    const ctx = canvas.getContext('2d');
   
    let timeLeft = minutes * 60
    let isRunning = false;
    let isPaused = false;
    let interval = null;
    const saved = localStorage.getItem("sessionsCount");
    let sessionsCompleted = parseInt(saved) > 0 ? parseInt(saved) : 0;
    let isBreak = false;

    

    function updateSessions() {
        sessionsCompleted++
        sessionsCount.textContent = sessionsCompleted

        localStorage.setItem("sessionsCount", sessionsCompleted)
    }

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
        timeLeft = isBreak ? breakTime : focusTime;
        updateDisplay();
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }


    function timerComplete() {
        if (!isBreak) {
            // Focus session complete - show pack opening!
            // alert('🎉 Focus complete! Time to open a Pokemon pack! 🎴'); Frank - this feature is a not yet.
            updateSessions()
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


    function initialise() {

        sessionsCount.textContent = sessionsCompleted
        
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const resetBtn = document.getElementById('resetBtn');

        startBtn.addEventListener('click', () => {
            startTimer()
        })

        pauseBtn.addEventListener('click', () => {
            pauseTimer()
        })

        resetBtn.addEventListener('click', () => {
            resetTimer()
        })

    

    }       

    return {initialise: initialise(), 
        changeTimer(newFocusMinutes, newBreakMinutes) {
            // Update the durations
            focusTime = newFocusMinutes * 60;
            breakTime = newBreakMinutes * 60;
            
            // If not running, update current time
            if (!isRunning) {
                timeLeft = isBreak ? breakTime : focusTime;
                updateDisplay();
            }
        },}


}

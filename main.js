        // Draw pixel art Squirtle
        const canvas = document.getElementById('squirtleCanvas');
        const ctx = canvas.getContext('2d');

        // Squirtle pixel art (simplified, cute version)
        const squirtle = [
            [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1,0,0,0,0],
            [0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0],
            [0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0],
            [0,1,2,2,2,3,3,3,2,2,2,2,3,3,3,2,2,2,1,0],
            [0,1,2,2,3,3,4,3,3,2,2,3,3,4,3,3,2,2,1,0],
            [1,2,2,2,3,4,4,4,3,2,2,3,4,4,4,3,2,2,2,1],
            [1,2,2,2,3,3,4,3,3,2,2,3,3,4,3,3,2,2,2,1],
            [1,2,2,2,2,3,3,3,2,2,2,2,3,3,3,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,5,5,5,5,5,5,5,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,5,5,5,5,5,2,2,2,2,2,2,2,1],
            [0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
            [0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
            [0,0,1,2,2,2,2,2,2,6,6,2,2,2,2,2,2,1,0,0],
            [0,0,0,1,2,2,2,2,6,6,6,6,2,2,2,2,1,0,0,0],
            [0,0,0,0,1,1,2,2,2,6,6,2,2,2,1,1,0,0,0,0],
            [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];

        const colors = {
            0: '#00000000',  // transparent
            1: '#2A5F80',    // dark outline
            2: '#7DD3FC',    // light blue body
            3: '#FFFFFF',    // white eyes
            4: '#1A1A1A',    // black pupils
            5: '#FF6B9D',    // pink mouth
            6: '#5AB9EA'     // shell swirl
        };

        function drawSquirtle() {
            const scale = 4;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            squirtle.forEach((row, y) => {
                row.forEach((pixel, x) => {
                    if (pixel !== 0) {
                        ctx.fillStyle = colors[pixel];
                        ctx.fillRect(x * scale, y * scale, scale, scale);
                    }
                });
            });
        }

        drawSquirtle();

        // Timer logic
        let timeLeft = 25 * 60; // 25 minutes in seconds
        let isRunning = false;
        let isPaused = false;
        let interval = null;
        let sessionsCompleted = 0;
        let isBreak = false;

        const timerDisplay = document.getElementById('timerDisplay');
        const sessionLabel = document.getElementById('sessionLabel');
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const resetBtn = document.getElementById('resetBtn');
        const sessionsCount = document.getElementById('sessionsCount');

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
                alert('🎉 Focus complete! Time to open a Pokemon pack! 🎴');
                
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

        // Make Squirtle animate when timer is running
        setInterval(() => {
            if (isRunning && Math.random() > 0.9) {
                // Squirtle blinks occasionally
                canvas.style.transform = 'scaleY(0.8)';
                setTimeout(() => {
                    canvas.style.transform = 'scaleY(1)';
                }, 100);
            }
        }, 1000);

        function switchTheme(theme) {
            if (theme === 'charmander') {
                window.location.href = 'pomodoro-charmander.html';
            } else if (theme === 'bulbasaur') {
                window.location.href = 'pomodoro-bulbasaur.html';
            }
            // Already on Squirtle page, do nothing
        }
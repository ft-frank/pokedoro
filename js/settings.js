


export function createSettings(timer) {

    // Settings Modal Logic
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettings = document.getElementById('close-settings');
    const saveSettings = document.getElementById('save-settings');
    const focusTimeInput = document.getElementById('focus-duration');
    const breakTimeInput = document.getElementById('break-duration');
    const overlay = document.querySelector('.settings-overlay');


    function changeTimer(){
            const focusTime = parseInt(focusTimeInput.value);
            const breakTime = parseInt(breakTimeInput.value);
            
            // Validate
            if (focusTime < 1 || focusTime > 60) {
                alert('Focus duration must be between 1 and 60 minutes'); //Frank - probably not an alert i don't like alerts
                return;
            }
            
            if (breakTime < 1 || breakTime > 30) {
                alert('Break duration must be between 1 and 30 minutes');
                return;
            }
            
            // Save to localStorage
            localStorage.setItem('focusTime', focusTime);
            localStorage.setItem('breakTime', breakTime);
            
            //Frank - changeTimer

            timer.changeTimer(focusTime, breakTime)

            //Frank - change the screen timer

            // Close modal
            settingsModal.classList.remove('active');
            
    }

    function initialise() {
            // Open settings
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('active');
            
            // Load current values (if you have a timer object with these properties)
            // focusTimeInput.value = timer.focusTime || 25;
            // breakTimeInput.value = timer.breakTime || 5;
        });

        // Close settings
        closeSettings.addEventListener('click', () => {
            settingsModal.classList.remove('active');
        });

        // Close when clicking overlay
        overlay.addEventListener('click', () => {
            settingsModal.classList.remove('active');
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && settingsModal.classList.contains('active')) {
                settingsModal.classList.remove('active');
            }
        });

        // Save settings
        saveSettings.addEventListener('click', () => {
            changeTimer();
        });

        }

   


    return initialise()
    


}
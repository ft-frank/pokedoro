


export function createSettings(timer) {

    // Settings Modal Logic
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettings = document.getElementById('close-settings');
    const saveSettings = document.getElementById('save-settings');
    const focusDurationInput = document.getElementById('focus-duration');
    const breakDurationInput = document.getElementById('break-duration');
    const overlay = document.querySelector('.settings-overlay');


    function changeTimer(){
            const focusDuration = parseInt(focusDurationInput.value);
            const breakDuration = parseInt(breakDurationInput.value);
            
            // Validate
            if (focusDuration < 1 || focusDuration > 60) {
                alert('Focus duration must be between 1 and 60 minutes'); //Frank - probably not an alert i don't like alerts
                return;
            }
            
            if (breakDuration < 1 || breakDuration > 30) {
                alert('Break duration must be between 1 and 30 minutes');
                return;
            }
            
            // Save to localStorage
            localStorage.setItem('focusDuration', focusDuration);
            localStorage.setItem('breakDuration', breakDuration);
            
            //Frank - changeTimer

            timer.changeTimer(focusDuration, breakDuration)


            // Close modal
            settingsModal.classList.remove('active');
            
    }

    function initialise() {
            // Open settings
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('active');
            
            // Load current values (if you have a timer object with these properties)
            // focusDurationInput.value = timer.focusDuration || 25;
            // breakDurationInput.value = timer.breakDuration || 5;
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
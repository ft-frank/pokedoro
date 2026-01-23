let resourcesLoaded = false;
let minimumTimePassed = false;

function hideLoader() {
    if (resourcesLoaded && minimumTimePassed) {
        const loadingScreen = document.getElementById('loading-screen');
        const app = document.getElementById('app');
        
        // Fade out loading screen
        loadingScreen.classList.add('fade-out');
        
        // Show app after fade completes
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            app.style.display = 'block';
        }, 500); // Matches CSS transition
    }
}

// Wait for all resources to load
window.addEventListener('load', () => {
    resourcesLoaded = true;
    hideLoader();
});

// Minimum loading time (prevents flash if loads too fast)
setTimeout(() => {
    minimumTimePassed = true;
    hideLoader();
}, 1500); // 1.5 seconds minimum


export function Load() {
    let resourcesLoaded = false;
    let minimumTimePassed = false;

    function hideLoader() {
        if (resourcesLoaded && minimumTimePassed) {
            const loadingScreen = document.getElementById('loading-screen');
            const app = document.getElementById('app');
            
            // Fade out loading screen
            loadingScreen.classList.add('fade-out');
            
            // Show app after fade completes
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                app.style.display = 'block';
            }, 500); // Matches CSS transition
        }
    }

    // Wait for all resources to load
    window.addEventListener('load', () => {
        resourcesLoaded = true;
        hideLoader();
    });

    // Minimum loading time (prevents flash if loads too fast)
    setTimeout(() => {
        minimumTimePassed = true;
        hideLoader();
    }, 1500); // 1.5 seconds minimum
}
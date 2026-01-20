import {Charmander} from './charmander.js'
import {Squirtle} from './squirtle.js'
import {Bulbasaur} from './bulbasaur.js'
import {Pikachu} from './pikachu.js'

const THEMES = {
    squirtle: {
        name: 'squirtle',
        emoji: '💧',
        draw: Squirtle
    },
    charmander: {
        name: 'charmander',
        emoji: '🔥',
        draw: Charmander
    },
    bulbasaur: {
        name: 'bulbasaur',
        emoji: '🌿',
        draw: Bulbasaur
    },
    pikachu: {
        name: 'pikachu',
        emoji: '⚡',
        draw: Pikachu
    }
};

export function createThemeManager() {
    let currentTheme = null;
    
    function switchTheme(themeName) {
        const theme = THEMES[themeName];
        if (!theme) {
            console.error(`Theme "${themeName}" not found`);
            return;
        }
        
        // Update body class
        document.body.className = themeName;
        
        // Draw pokemon
        theme.draw();
        
        currentTheme = themeName;
        
        // Save preference
        localStorage.setItem('selectedTheme', themeName);
    }
    
    function getRandomTheme() {
        const themeNames = Object.keys(THEMES);
        const randomIndex = Math.floor(Math.random() * themeNames.length);
        return themeNames[randomIndex];
    }
    
    function getSavedTheme() {
        return localStorage.getItem('selectedTheme') || getRandomTheme();
    }
    
    return {
        switch: switchTheme,
        current: () => currentTheme,
        random: getRandomTheme,
        saved: getSavedTheme,
        all: () => Object.keys(THEMES)
    };
}
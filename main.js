import {createTimer} from './timer.js'
import {createThemeManager} from './theme.js'

// DOM elements
const squirtleBtn = document.getElementById('squirtle-theme-btn');
const charmanderBtn = document.getElementById('charmander-theme-btn');
const bulbasaurBtn = document.getElementById('bulbasaur-theme-btn');
const pikachuBtn = document.getElementById('pikachu-theme-btn');

// Create instances
const timer = createTimer();
const themes = createThemeManager();

// Initialize with saved/random theme
themes.switch(themes.saved());

// Bind theme buttons
squirtleBtn.addEventListener('click', () => themes.switch('squirtle'));
charmanderBtn.addEventListener('click', () => themes.switch('charmander'));
bulbasaurBtn.addEventListener('click', () => themes.switch('bulbasaur'));
pikachuBtn.addEventListener('click', () => themes.switch('pikachu'));











import {createTimer} from './timer.js'
import {Charmander} from './charmander.js'
import {Squirtle} from './squirtle.js'
import {Bulbasaur} from './bulbasaur.js'
import {Pikachu} from './pikachu.js'


const body = document.querySelector("body")

// Frank - Add randomisation of theme at start

 const initialiseTimer = createTimer()


let theme = ["squirtle", "bulbasaur", "charmander", "pikachu"][Math.floor(Math.random() * 4)];
switchTheme(theme)



const squirButton = document.getElementById('squirtle-theme-btn')
const charButton = document.getElementById('charmander-theme-btn')
const bulbButton = document.getElementById('bulbasaur-theme-btn')
const pikaButton = document.getElementById('pikachu-theme-btn')

squirButton.addEventListener('click', ()=> {
    switchTheme("squirtle")
})

charButton.addEventListener('click', ()=> {
    switchTheme("charmander")
})

bulbButton.addEventListener('click', ()=> {
    switchTheme("bulbasaur")
})

pikaButton.addEventListener('click', () => {
    switchTheme("pikachu")
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

    else if (theme == "pikachu") {
        const pikaButton = Pikachu()
    }

}
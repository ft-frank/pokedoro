Project Diary and Notes

19/1/25 - 

Created project on git and cloned to my ubuntu terminal with git.
Used Claude to code my frontend, including the pixel art, css etc. This involved the charmander, bulbasaur and squirtle screens.
Code was too messy, refactored the logic of creating the pixel art into separte js files that were to be imported
, so that I could easily add more pokemon later on. 
Deployed to github pages, wasn't working properly

20/1/25 - 

Fixed the github pages problem, the link to bulbasaur js was without a . at the front of './bulbasaur.js'
Added pikachu theme. Thanks to my work from yesterday, this only took 5 - 10 minutes to ship (using claude code to help create the theme itself ofc)

Deployed to vercel as well for futur proofing when i add more features
also signed up for the pokemon API

Super modularity, main.js file less than 50 lines, and alot of imports make it much easier to edit code as required.

21/1/25 - 

- Google lighthouse reveals 50 SEO
- Pikachu theme has a low contrast ratio between foreground and background, affecting web accessibility for people that like pikachu. 

- Used claude to vibecode/code for me up a settings tab. 








Working on adding a settings feature that allows one to change focus time and break time to preference.
MAJOR ISSUE - the timer will throttle because of setInterval(), and pause when in the background


22/1/25= 

1. Realised there should be a skip button for the break button, working on it. 
2. Timer is slightly slow, in 15 minutes it was beind by 10 seconds. not a HUGE issue, but worth fixing in the future.
3. LocalStorage working for sessionsCompleted. not working for settings. will work on that rn! - fixed


BrainStorm - > 

1. add a TCG API
2. use claude API so that the user can use any pokemon they like
3. transition my application to a react + node.js APP as soon as possible
4. advanced settings like the possibility to make the break timer automatic
5. Loading screen. - done




# Rock - Paper - Scissors 

[![Netlify Status](https://api.netlify.com/api/v1/badges/d598d746-1b86-4b46-b8d1-38794f87ebeb/deploy-status)](https://rps-ls.netlify.com/)


A simple game of Rock-Paper-Scissors where you can play against the computer or simulate a game, computer vs computer. The game can also be extended for `Lizard-Spock`.

## Running the App

    $ git clone <REPO_URL>  
    $ cd rock-paper-scissors  
    $ yarn install  
    $ yarn dev 

I have set up Continuous Deployment with Netlify, so the app is released to production when the code is pushed or merged to master.   
**DEMO** - [https://rps-ls.netlify.com/](https://rps-ls.netlify.com/)  


## Running the unit tests

    $ yarn test

I have set up a pre-commit hook to run the tests. I believe this is only feasible because the tests average less that 10 seconds. Any more  than that and they should be run in a CI pipeline, in my opinion.  
**+-60% coverage**

## Running the e2e tests

    $ yarn e2e

Then click on `game.spec.ts` in the Cypress GUI.

I have setup a couple of e2e/integration tests with Cypress. I have not done any assertions, just a very basic automated game-play. (So not very useful at the moment, but a starting point)

## Adding Lizard - Spock
Extending the game for Lizard-Spock is trivial. There is a single method `addLizardSpock` which simply:
- extends to the possible choices 
- extends to the possible ways to win
- extends to the result descriptions _example: "Lizard poisens spock"_
- reveals (and binds) the 'Lizard' and 'Spock' buttons

I have added a button that extends the game

## Approach
I had planned to use Web Components (or at least Custom Elements), but after about 30 minutes fiddling with Babel/TypeScript/Webpack/polyfills, just to support IE11, I abandoned that idea and added the markup straight in the `/public/index.html`

### CSS 
I didn't spend too much time on styling. The UI is quite rudimentary. I found myself wasting too much time trying to utilise the newer CSS features, such as Custom Properties, Grid etc. to support IE11

### Why TypeScript?
I am a proponent of TypeScript and use it in almost every project. _Interfaces_ and _development-time error checking_ makes it easy to **maintain, scale** and **inherit** a codebase, as well as provide a higher level of code confidence overall.

### Workflow
I haven't used any kind of git flow, all commits were to master :cowboy_hat_face:. As mentioned above I have set up a pre-commit hook to run the tests, as well as run the linter on staged files.

## Performance and Accessibility
I believe that well structured, semantic markup will get the app 80% of the way to having a properly accessible application.  
 
The lighthouse score of this app is 100% for all **Performance**, **Best Practices**, **Accessibility** and **SEO**.

I started adding a Service Worker, manifest.json file etc (in a `pwa` branch) to make the app a full PWA and therefore available offline, but I ran out of time.

### Improvements
There were a few things that could be improved on the current state of this app

- Tests organised a little better
- Tests take too long to run. Some Jest configuration could probably solve this
- The Game class could probably be stream-lined

## Conclusion

Please let me know if you have any questions.   
Any feedback / constructive criticism would be much appreciated.

Thank you!

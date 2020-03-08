# Rock - Paper - Scissors 

A simple game of Rock-Paper-Scissors where you can play against the computer or simulate a game, computer vs computer. 

## Running the App

    $ git clone <REPO_URL>  
    $ cd rock-paper-scissors  
    $ yarn install  
    $ yarn dev 

## Running the tests

    $ yarn test

I have set up a pre-commit hook to run the tests, but only because the tests run in less that 10 seconds. Any more that than that and I don't beleive it would be feasible.  

## Adding Lizard - Spock
Extending the game for Lizard-Spock is trivial. There is a single method `addLizardSpock` which simply:
- extends to the possible choices 
- extends to the possible wins
- extends to the result descriptions _example: "Lizard poisens spock"_
- reveals (and binds) the 'Lizard' and 'Spock' buttons

I have added a button that extends the game

## Approach

### CSS 
I didn't spend too much time on styling. The UI is quite rudimentary. I found myself wasting too much time trying to utilise the newer CSS features, such as Custom Properties, Grid etc. to support IE11

### TypeScript
I added TypeScript support. I am a fan of TS and use it in almost every project. Interfaces and development-time error checking makes it easy to **maintain, scale** and **inherit** a codebase, as well as provide a higher level of code confidence overall.

### Workflow
I haven't used any kind of git flow, all commits were to master :cowboy_hat_face:. As mentioned above I have set up a pre-commit hook to run the tests, as well as run the linter on staged files.
 
I have also set up Continuous Deployment with Netlify, so the app is released when the code is pushed or merged to master. [https://rps-ls.netlify.com/](https://rps-ls.netlify.com/)


## Performance and Accessibility
I beleive that well structured, semantic markup will get the app 80% of the way to having a properly accessible application.  
 
 The lighthouse score of this app is 100% for all **Performance**, **Best Practices**, **Accessibility** and **SEO**.

 I started adding a Service Worker, manifest.json file etc (in a `pwa` branch) to make the app a full PWA and therefore available offline, but I ran out of time.


### Improvements
Some things that could be improved on the current state of this app

- Tests organised a little better
- Tests take too long to run	
- The Game class could probably be stream-lined slightly


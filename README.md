# Rock - Paper - Scissors 

A simple game of Rock-Paper-Scissors where you can play against the computer or simulate a game, computer vs computer. 

## Running the App

    $ git clone <REPO_URL>  
    $ cd rock-paper-scissors  
    $ yarn install  
    $ yarn dev 

## Running the tests

    $ yarn test

I have set up a pre-commit hook to run the tests, but only because the tests run in less that 5 seconds. Any more that than that and I don't think it would be feasible.  

## Workflow
As mentioned above I have set up a pre-commit hook to run the tests, as well as run the linter on staged files.
 
I have also set up Continuous Deployment with Netlify, so the app is released when the code is pushed or merged to master. [https://rps-ls.netlify.com/](https://rps-ls.netlify.com/)


import { GameElements } from './gameElements';

export class Game extends GameElements {
    public playerOne: IPlayer = { name: 'Player One', score: 0 };
    public playerTwo: IPlayer = { name: 'Simone (CPU)', score: 0 };

    public possibleChoices: choices = ['rock', 'paper', 'scissors'];
    public possibleWins: string[] = ['rock:scissors', 'paper:rock', 'scissors:paper'];

    public results = {
        PLAYER_ONE: `Player One Wins!!!`,
        PLAYER_TWO: `Player Two Wins!!!`,
        DRAW: `It's a draw!!!`
    };
    public resultDescription: IResultDescription = {
        'rock:scissors': 'Rock crushes Scissors',
        'paper:rock': 'Paper covers Rock',
        'scissors:paper': 'Scissors cut Paper'
    };

    constructor() {
        super();
    }

    initialize() {
        this.rock_btn = document.querySelector('.rock-btn');
        this.paper_btn = document.querySelector('.paper-btn');
        this.scissors_btn = document.querySelector('.scissors-btn');
        this.simulate_btn = document.querySelector('.simulate-btn');
        this.restart_btn = document.querySelector('.restart-btn');
        this.score_one = document.querySelector('.player-one span')
        this.score_two = document.querySelector('.player-two span');
        this.player_one_name = document.querySelector('.player-one strong');
        this.player_two_name = document.querySelector('.player-two strong');
        this.main_stage = document.querySelector('.stage');
        this.player_one_stage = document.querySelector('.stage .player-one');
        this.player_two_stage = document.querySelector('.stage .player-two');
        this.result_elem = document.querySelector('.result');
        this.description = document.querySelector('.description');

        this.rock_btn.addEventListener('click', this.play.bind(this, 'rock'));
        this.paper_btn.addEventListener('click', this.play.bind(this, 'paper'));
        this.scissors_btn.addEventListener('click', this.play.bind(this, 'scissors'));

        this.restart_btn.addEventListener('click', this.restartGame.bind(this))
    }

    play(playerChoice: choice): void {
        this.setPlayerNames(this.playerOne.name, this.playerTwo.name);
        this.checkResult(playerChoice, this.computerChoice())
    }

    computerChoice(): choice {
        const numberOfChoices = this.possibleChoices.length;
        const randomChoice = Math.floor(Math.random() * numberOfChoices);
        return this.possibleChoices[randomChoice];
    }

    checkResult(playerOneChoice: choice, playerTwoChoice: choice): string {
        const result = `${playerOneChoice}:${playerTwoChoice}`;

        if (playerOneChoice === playerTwoChoice) {
            this.description.textContent = '-';
            return this.result_elem.innerHTML = this.results.DRAW;
        } else if (this.possibleWins.indexOf(result) > -1) {
            this.playerOne.score++;
            this.description.textContent = this.resultDescription[result];
            this.updateScore(this.score_one, this.playerOne.score);
            return this.result_elem.innerHTML = this.results.PLAYER_ONE;
        } else {
            this.description.textContent = this.resultDescription[`${playerTwoChoice}:${playerOneChoice}`];
            this.playerTwo.score++;
            this.updateScore(this.score_two, this.playerTwo.score);
            return this.result_elem.innerHTML = this.results.PLAYER_TWO;
        }
    }

    setPlayerNames(playerOne: string, playerTwo: string): void {
        this.player_one_name.textContent = playerOne;
        this.player_two_name.textContent = playerTwo;
    }

    updateScore(elementToUpdate: HTMLElement, score: number): void {
        elementToUpdate.innerHTML = score.toString();
        if (this.restart_btn.hasAttribute('disabled')) {
            this.restart_btn.removeAttribute('disabled');
        }
    }

    restartGame() {
        this.playerOne.score = 0;
        this.playerTwo.score = 0;
        this.restart_btn.setAttribute('disabled', 'disabled');
        this.result_elem.textContent = 'Play the game'
        this.description.textContent = 'Rock - Paper - Scissors'
        this.updateScore(this.score_one, this.playerOne.score)
        this.updateScore(this.score_two, this.playerTwo.score)

        return [this.playerOne, this.playerTwo]
    }
}

type choices = choice[];
type choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

interface IPlayer {
    name: string;
    score: number;
}

interface IResultDescription {
    [key: string]: string;
}
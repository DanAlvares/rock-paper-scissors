import { GameElements } from './gameElements';
import { choice, IPlayer, IResultDescription } from '../models/game.model';

export class Game extends GameElements {
    public playerOne: IPlayer = { name: 'Player One', score: 0 };
    public playerTwo: IPlayer = { name: 'Simone (CPU)', score: 0 };
    public possibleChoices: choice[] = ['rock', 'paper', 'scissors'];
    public possibleWins: string[] = ['rock:scissors', 'paper:rock', 'scissors:paper'];
    public results = {
        PLAYER_ONE: `Player One Wins!!!`,
        PLAYER_TWO: `Player Two Wins!!!`,
        DRAW: `It's a draw!!!`
    };
    public resultDescription: IResultDescription = {
        'rock:scissors': 'Rock crushes Scissors',
        'paper:rock': 'Paper covers Rock',
        'scissors:paper': 'Scissors cuts Paper'
    };

    private isSimulation = false;

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
        this.description = document.querySelector('.description span');
        this.lizard_btn = document.querySelector('.lizard-btn');
        this.spock_btn = document.querySelector('.spock-btn');
        this.lizard_spock_btn = document.querySelector('.lizard-spock-btn');

        this.rock_btn.addEventListener('click', this.play.bind(this, 'rock'));
        this.paper_btn.addEventListener('click', this.play.bind(this, 'paper'));
        this.scissors_btn.addEventListener('click', this.play.bind(this, 'scissors'));

        this.restart_btn.addEventListener('click', this.restartGame.bind(this));
        this.simulate_btn.addEventListener('click', this.simulateGame.bind(this));
        this.lizard_spock_btn.addEventListener('click', this.addLizardSpock.bind(this));
    }

    play(playerChoice: choice): void {
        if (this.isSimulation) {
            this.restartGame()
            this.isSimulation = false;
        }
        this.setPlayerNames(this.playerOne.name, this.playerTwo.name);
        this.checkResult(playerChoice, this.computerChoice())
    }

    computerChoice(): choice {
        const numberOfChoices = this.possibleChoices.length;
        const randomChoice = Math.floor(Math.random() * numberOfChoices);
        return this.possibleChoices[randomChoice];
    }

    checkResult(playerOneChoice: choice, playerTwoChoice: choice): string {
        let winner = null;
        const playerChoices = `${playerOneChoice}:${playerTwoChoice}`; // eg. paper:rock
        const result = playerOneChoice === playerTwoChoice ? this.results.DRAW
            : this.possibleWins.includes(playerChoices)
                ? this.results.PLAYER_ONE
                : this.results.PLAYER_TWO;

        switch (result) {
            case this.results.PLAYER_ONE:
                this.playerOne.score++;
                this.description.textContent = this.resultDescription[playerChoices];
                this.updateScoreboard(this.score_one, this.playerOne.score);
                this.result_elem.innerHTML = this.results.PLAYER_ONE;
                winner = 'playerOne';
                break;
            case this.results.PLAYER_TWO:
                this.playerTwo.score++;
                this.description.textContent = this.resultDescription[`${playerTwoChoice}:${playerOneChoice}`];
                this.updateScoreboard(this.score_two, this.playerTwo.score);
                this.result_elem.innerHTML = this.results.PLAYER_TWO;
                winner = 'playerTwo';
                break;
            default:
                this.description.textContent = '-';
                this.result_elem.innerHTML = this.results.DRAW;
                break;
        }

        this.displayResult(playerOneChoice, playerTwoChoice, winner);
        return this.result_elem.innerHTML;
    }

    setPlayerNames(playerOne: string, playerTwo: string): void {
        this.player_one_name.textContent = playerOne;
        this.player_two_name.textContent = playerTwo;
    }

    simulateGame(): void {
        if (!this.isSimulation) {
            this.restartGame()
            this.isSimulation = true;
        }
        this.checkResult(this.computerChoice(), this.computerChoice());
        this.setPlayerNames('Simone (CPU)', 'Tim (CPU)')
        this.isSimulation = true;
    }

    updateScoreboard(elementToUpdate: HTMLElement, score: number): void {
        elementToUpdate.innerHTML = score.toString();
        if (this.restart_btn.hasAttribute('disabled')) {
            this.restart_btn.removeAttribute('disabled');
        }
    }

    restartGame(): IPlayer[] {
        this.playerOne.score = 0;
        this.playerTwo.score = 0;
        this.restart_btn.setAttribute('disabled', 'disabled');
        this.result_elem.textContent = 'Play the game';
        this.description.textContent = 'Rock - Paper - Scissors';
        this.resetStage();
        this.updateScoreboard(this.score_one, this.playerOne.score)
        this.updateScoreboard(this.score_two, this.playerTwo.score)

        return [this.playerOne, this.playerTwo]
    }

    resetStage() {
        this.main_stage.classList.remove('game-over')
        this.player_one_stage.className = `player player-one`;
        this.player_two_stage.className = `player player-two`;
    }

    displayResult(playerOneChoice: choice, playerTwoChoice: choice, winner: string) {
        this.main_stage.classList.add('game-over');

        this.player_one_stage.className =
            `player player-one ${playerOneChoice} ${winner ? winner === 'playerOne' ? 'winner' : 'loser' : ''}`;

        this.player_two_stage.className =
            `player player-two ${playerTwoChoice} ${winner ? winner === 'playerTwo' ? 'winner' : 'loser' : ''}`;
    }

    addLizardSpock() {
        this.possibleChoices.push('lizard', 'spock');
        this.possibleWins.push(
            'rock:lizard',
            'lizard:spock',
            'spock:scissors',
            'paper:spock',
            'scissors:lizard',
            'spock:rock',
            'lizard:paper')
        this.resultDescription = {
            ...this.resultDescription,
            'rock:lizard': 'Rock crushes Lizard',
            'lizard:spock': 'Lizard poisens Spock',
            'spock:scissors': 'Spock smashes Scissors',
            'paper:spock': 'Paper disproves Spock',
            'scissors:lizard': 'Scissors decapitates Lizard',
            'spock:rock': 'Spock vaporizes Rock',
            'lizard:paper': 'Lizard eats Paper',
        }

        this.lizard_btn.removeAttribute('hidden');
        this.spock_btn.removeAttribute('hidden');

        this.lizard_btn.addEventListener('click', this.play.bind(this, 'lizard'));
        this.spock_btn.addEventListener('click', this.play.bind(this, 'spock'));

        this.lizard_spock_btn.setAttribute('hidden', 'hidden');
    }
}

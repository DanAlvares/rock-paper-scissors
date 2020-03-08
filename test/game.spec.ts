import { Game } from '../src/ts/game';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    })

    it('should play the game', () => {
        // Arrange
        jest.spyOn(game, 'checkResult').mockImplementation();
        jest.spyOn(game, 'setPlayerNames').mockImplementation();
        jest.spyOn(game, 'computerChoice').mockImplementation()

        // Act
        game.play('rock');

        // Assert
        expect(game.setPlayerNames).toHaveBeenCalled()
        expect(game.computerChoice).toHaveBeenCalled()
        expect(game.checkResult).toHaveBeenCalled()
    });

    it('should set the names of the players', () => {
        // Arrange
        game.player_one_name = document.createElement('div');
        game.player_two_name = document.createElement('div');

        // Act
        game.setPlayerNames('Simone', 'Tim');

        // Assert
        expect(game.player_one_name.innerHTML).toBe('Simone');
        expect(game.player_two_name.innerHTML).toBe('Tim');
    });

    it('should randomise the computer choice', () => {
        let cpuChoice = game.computerChoice();
        expect(game.possibleChoices).toContain(cpuChoice);

        cpuChoice = game.computerChoice();
        expect(game.possibleChoices).toContain(cpuChoice);

        cpuChoice = game.computerChoice();
        expect(game.possibleChoices).toContain(cpuChoice);
    });

    describe('Check Result', () => {
        beforeEach(() => {
            // Arrange
            game.description = document.createElement('div');
        });

        it('should be a Win for PLAYER ONE', () => {
            // Act
            const result = game.checkResult('rock', 'scissors');

            // Assert
            expect(result).toBe(game.results.PLAYER_ONE)
            expect(game.description.innerHTML).toBe(game.resultDescription['rock:scissors'])
        });

        it('should be a Win for PLAYER TWO', () => {
            // Act
            const result = game.checkResult('paper', 'scissors');

            // Assert
            expect(result).toBe(game.results.PLAYER_TWO)
            expect(game.description.innerHTML).toBe(game.resultDescription['scissors:paper'])
        });

        it('should be a draw', () => {
            // Act
            const result = game.checkResult('rock', 'rock');

            // Assert
            expect(result).toBe(game.results.DRAW)
            expect(game.description.innerHTML).toBe('-')
        });
    });
});
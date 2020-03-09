const rock_btn = '.rock-btn';
const paper_btn = '.paper-btn';
const scissors_btn = '.scissors-btn';
const lizard_btn = '.lizard-btn';
const spock_btn = '.spock-btn';

const simulate_btn = '.simulate-btn';
const restart_btn = '.restart-btn';
const lizard_spock_btn = '.lizard-spock-btn';

context('Rock paper Scissors', () => {
    beforeEach(() => {
        cy.visit('https://rps-ls.netlify.com/')
    });

    it('plays against the computer', () => {
        cy.get(rock_btn).click();
        cy.get(paper_btn).click();
        cy.get(scissors_btn).click();
        cy.get(rock_btn).click();
        cy.get(paper_btn).click();
        cy.get(scissors_btn).click();
        cy.get(rock_btn).click();
        cy.get(paper_btn).click();
        cy.get(scissors_btn).click();

        cy.get(restart_btn).click();
    });

    it('adds lizard - spock and plays', () => {
        cy.get(lizard_spock_btn).click();

        cy.get(lizard_btn).click();
        cy.get(spock_btn).click();
        cy.get(lizard_btn).click();
        cy.get(spock_btn).click();
        cy.get(lizard_btn).click();

        cy.get(restart_btn).click();
    });

    it('simulates CPU vs CPU', () => {
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();
        cy.get(simulate_btn).click();

        cy.get(restart_btn).click();
    });
});

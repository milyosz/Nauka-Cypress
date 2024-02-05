describe('Nakarm Psa', () => {
    beforeEach(() => {
        cy.clearCookies(); // Clear cookies before each test case
    });

    for (let i = 1; i <= 20; i++) {
        it(`Nakarm Psa Bot${i}`, () => {
            cy.visit('https://nakarmpsa.olx.pl/');
            cy.get('#pet-ferdi > .single-pet-inner > .single-pet-control > .single-pet-control-feed > .single-pet-control-feed_button > span').click();
        });
    }
});



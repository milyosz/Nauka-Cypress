describe('Login Test', function() {
    
    beforeEach(function() {
        cy.fixture('example.json').then(function(data) {
            this.data = data;
            cy.visit(this.data.Url)
            cy.get('[data-test=username]').type(this.data.username)
            cy.get('[data-test=password]').type(this.data.password)
            cy.get('.btn_action').click()
        })
        
    })

    
    it('Checks the login functionality', function() {
        cy.url().should('include', '/inventory.html')
    })

    it('Checks cart item count update after addition', function() {
        cy.get('.inventory_item')
            .eq(1)
            .find('.btn_inventory')
            .click();

        cy.get('.shopping_cart_badge').should('have.text', '1')

        cy.get('.inventory_item')
            .eq(2)
            .find('.btn_inventory')
            .click();

        // sprawdzamy czy koszyk wyswietla poprawna ilosc produktow
        cy.get('.shopping_cart_badge').should('have.text', '2')

        // Usuwamy kliknięty produkt
        cy.get('.inventory_item')
            .eq(2)
            .find('.btn_secondary')
            .click();
     
        cy.get('.shopping_cart_badge').should('have.text', '1')

        cy.get('.inventory_item')
        .eq(1)
        .find('.btn_secondary')
        .click();
    
        cy.get('.shopping_cart_badge').should('not.exist');

       
        
        
    })
        


        
        
})  



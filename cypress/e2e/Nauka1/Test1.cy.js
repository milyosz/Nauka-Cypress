// cypress/integration/examples/Test1.js

describe('My First Test', () => {
    it('Fitst Test Case', () => { 
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca').wait(2000)

        //// sprawdzenie poprawności wysszukiwarki - czy wyświetla się poprawny produkt?

        cy.get('.product:visible').should('have.length',4)  ///:visible bo jeden produkt na stronie jest niewidoczny

        // cy.get('.product').should('have.length',5)
        cy.get('.products').as('productLocator') // alias dla elementu

        cy.get('@productLocator').find('.product').should('have.length',4) /// użycie aliasu w cypress


        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find("h4.product-name").text()

            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
                
            }

        })


        cy.get('.brand').then(function(logoElement){
                
                cy.log(logoElement.text())
    
            })

        const Logo = cy.get('.brand')
        
        // cy.log(cy.get('.brand').text())

        // cy.log(Logo.text())

    })
}
)
    
    
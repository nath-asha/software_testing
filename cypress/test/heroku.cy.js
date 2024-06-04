describe('Heroku', () => {
    it('Heroku login', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.xpath("//button[@type='submit']").click()
        
    });
});
describe('Custom button', () => {
    it('Rahul Shetty', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('Option3').should("have.value","option3")
    });
});
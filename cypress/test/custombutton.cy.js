describe('Custom button', () => {
    it('dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('Option3').should("have.value","option3")
    });
    it('checkbox', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('[type="checkbox"]').check(['option1','option2','option3'])
    });
    it('radiobutton', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[for="radio1"] > .radioButton').check()
    });
    it("Dynamic Program", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
        cy.get("#autocomplete").type("IND");
    
        cy.get(".ui-menu-item div").each(($el, index, $list) => {
          if ($el.text() === "India") {
            cy.wrap($el).click();
          }
        });
    
        cy.get("#autocomplete").should("have.value", "India");
      });
    it('Alert', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal('Hello , share this practice page and share your knowledge');
        return true
        });
    });
    it('Confirm', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#confirmbtn').click();
        cy.on('window:confirm', (message) => {
            
            expect(message).to.equal('Hello , Are you sure you want to confirm?');
        return true
        })    
    });
});
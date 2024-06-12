describe("MyfirstTest",()=>{
    it("OrangeHRM",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").should("include","OrangeHRM")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("[type='submit']").click()
        cy.get("p[class='oxd-userdropdown-name']").click()
        // cy.get(".oxd-dropdown-menu").find("oxd-userdropdown-link").should("have.length",4)
        // cy.get("a[href='/web/index.php/auth/logout']").click()
        // cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.contains("Admin").click()
        cy.get(".oxd-autocomplete-wrapper").type("sa");
    
        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if ($el.text() === "Sayuj Kumar Shrestha") {
              cy.wrap($el).click();
            }
    })
})
})
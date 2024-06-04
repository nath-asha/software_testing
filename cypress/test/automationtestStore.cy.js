describe('Automation test store testsuit', () => {
    it('Contact-Us', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath('(//*[text()="Contact Us"])[2]').click()
        cy.get('#ContactUsFrm_first_name').type('Maya')
        cy.get('#ContactUsFrm_email').type('abc@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('abc')
        // cy.get('.col-md-6 > .btn').click()
        cy.xpath('//*[@id="ContactUsFrm"]/div[2]/div[2]/button').click()
    });
});
export class LoginPage {
    // Deel login page
    navigate() {
        cy.visit('https://app.deel.training/login')
    }

    // Input email address
    inputEmailaddress(emailText) {
        cy.get('.flex-dir-col > :nth-child(1) > .input > input')
        .type(emailText)
        .should('have.value', 'azeezlameed@gmail.com')
    }

    // Input password
    inputPassword(passwordText) {
        cy.get('.mt-9 > .input-container > .input > input').type(passwordText)
    }

    // Click login button
    loginButton() {
        cy.get('.mt-10 > div').click()
    }
    
    


}
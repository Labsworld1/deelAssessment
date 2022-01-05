/// <reference types="cypress" />

import { EssDashboardPage } from "../page-objects/essdashboard-page"
import { LoginPage } from "../page-objects/login-page"

describe('Authenication', function(){
    const loginPage = new LoginPage
    const essPage = new EssDashboardPage

    beforeEach( function(){
        cy.viewport(1280, 720)
        loginPage.navigate()

        // Assert Deel 
        cy.contains('Log in', { timeout: 10000 }).should('have.text', 'Log in')
    })
    it('should able to create contract', function (){
        loginPage.inputEmailaddress('azeezlameed@gmail.com')
        loginPage.inputPassword('Chin918cram791@')
        loginPage.loginButton()
        cy.contains('Labsworld', { timeout: 10000 }).should('have.text', 'Labsworld')
        essPage.createContractBtn()
        // assert contract page
        cy.contains('Contract Type').should('have.text', 'Contract Type')
        essPage.selectFixedRate()
        // assert creating fixed contract page
        cy.contains('Creating a fixed contract').should('have.text', 'Creating a fixed contract')
        essPage.inputContractName('Azeez Contract')
        essPage.selectContractorResidence()
        cy.wait(2000) // wait for 2 secs
        essPage.selectCountry()
        cy.wait(2000) // wait for 2 secs
        essPage.selectState()
        essPage.InputJobTitle('QA Analyst')
        essPage.selectSeniorityLevel()
        essPage.inputScopeOfWork('A QA Analyst')
        //essPage.selectDate()
        essPage.clickNextBtn()
        //assert payment rate page
        cy.contains('Define payment rate').should('have.text', 'Define payment rate')
        essPage.selectCurrency()
        essPage.inputPaymentRate(1000)
        essPage.selectPaymentFrequency()
        essPage.clickNextBtn()
        //next to define date
        cy.contains('Define dates of contract').should('have.text', 'Define dates of contract')
        essPage.clickNextBtn()
        //next to benefit and extra
        cy.contains('Termination date').should('have.text', 'Termination date')
        essPage.clickNextBtn()
        //next to compliance
        cy.contains('Contract compliance').should('have.text', 'Contract compliance')
        essPage.clickCreateContractBtn()
        //assert contract creation
        cy.contains('Azeez Contract', {timeout:10000}).should('have.text', 'Azeez Contract ')
        //cancel created contract
        essPage.cancelContractBtn()
        //assert cancel confirmation page
        cy.get('.text-center > .subtitle').should('have.text', 'Cancel Contract')
        essPage.clickCancelBtn()
        //assert contract has been cancelled
        cy.contains('Azeez Contract has been cancelled').should('have.text', 'Azeez Contract has been cancelled')
        essPage.clickOkBtn()
        
    })

})
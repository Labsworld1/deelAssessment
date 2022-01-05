export class EssDashboardPage{
    //option icon
    optionIcon() {
        cy.get('.mobile-header-content-container > .button > :nth-child(1) > .flex > svg').click()
    }

    //click create contract
    createContractBtn() {
        cy.contains('Create A Contract').click()
    }

    //select fixed rate
    selectFixedRate() {
        cy.contains('Fixed Rate').click()
    }

    //input contract name
    inputContractName(ContractNameTxt) {
        cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').type(ContractNameTxt)
    }

    //select contractor's residence
    selectContractorResidence() {
        cy.get(':nth-child(1)>.deel-ui__stack_vertical>.input-container > .flex .deel-ui__select').click()
    }

    //select country
    selectCountry() {
        cy.get('#react-select-3-option-1-2 > .deel-ui__select__option-container').click()
    }

    //select State
    selectState() {
        cy.get(':nth-child(2) > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').type('Colorado{enter}')
        cy.wait(3000)
    }

    //input job title
    InputJobTitle(jobTitleTxt) {
        cy.get(':nth-child(3) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').type(jobTitleTxt)
        cy.get('.suggestions-option').click()
    }

    //select seniority level
    selectSeniorityLevel() {
        cy.get('[data-qa="selector-seniority-level"] > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').type('Not Applicable{enter}')
    }

    //input scope of work
    inputScopeOfWork(scopeOfWorkTxt) {
        cy.get('.deel-ui__textarea-component__textarea').type(scopeOfWorkTxt)
    }

    //select date
    selectDate() {
        const dayjs = require('dayjs')
        cy.log(dayjs().format('MM/DD/YYYY'))
        cy.get('.deel-ui__calendar-input-container__input_content_value').type(dayjs().format('MM/DD/YYYY')).click() //input today's date in DD/MM/YYYY format
    }

    //next button
    clickNextBtn() {
        cy.contains('next').click()
        //cy.get('.justify-content-end > .button').click()
    }

    //select currency
    selectCurrency() {
        cy.get('.payment-set-controls > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container > .deel-ui__select__single-value').type('GBP{enter}')
    }

    //input payment rate
    inputPaymentRate(paymentRateTxt) {
        cy.get('.deel-ui__input-component__input').type(paymentRateTxt)
    }

    //select payment frequency
    selectPaymentFrequency() {
        cy.get(':nth-child(2) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__indicators > .deel-ui__select__indicator > .css-19bqh2r > path').click()
        cy.wait(2000)
        cy.get('#react-select-7-option-0 > .deel-ui__select__option-container').click() //select weekly
    }

    //create contract button
    clickCreateContractBtn() {
        cy.get(':nth-child(5) > .button > div').click()
    }

    //cancel created contract
    cancelContractBtn() {
        cy.get(':nth-child(2) > div > .no-wrap').click()
    }

    //click cancel
    clickCancelBtn(){
        cy.get('.justify-content-flex-end > [theme="primary"] > div').click()
    }

    //click ok
    clickOkBtn() {
        cy.get('.text-center > .button > div').click()
    }

}
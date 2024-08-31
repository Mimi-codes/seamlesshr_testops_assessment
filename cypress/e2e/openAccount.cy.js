import {faker} from '@faker-js/faker'

let data;
before(() => {
    cy.fixture("selectors.json").then((elem) => {
      data = elem.openAccount;
    });
  });
  

describe('Open a new Account Journey', () => {
it('Open a new Account', () => {
    cy.insertLoginDetails()
    cy.clickElement(data.openNewAcct)
    cy.seePage(data.openNewAcctTitle, data.openNewAcctVal)
    cy.selectDropdown(data.typeOfAcct, data.typeOfAcctVal)
    cy.selectDropdown(data.depositFund, 1)
    cy.clickElement(data.openNewAcctBtn)
    cy.seePage(data.acctValidity, data.acctValidityVal)
    cy.seePage(data.congratsField, data.congratsVal)

})
    })

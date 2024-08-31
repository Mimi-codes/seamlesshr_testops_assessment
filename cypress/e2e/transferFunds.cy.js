
let data;
before(() => {
    cy.fixture("selectors.json").then((elem) => {
      data = elem.transferFunds;
    });
  });
  

describe('Transfer Funds Journey', () => {
it('Transfer Funds', () => {
    cy.insertLoginDetails()
    cy.clickElement(data.transferFund)
    cy.seePage(data.transferFundValidity, data .transferFundValidityVal)
    cy.typeInTextField(data.amountField, data.amountVal)
    cy.selectDropdown(data.fromAcctField, 1)
    cy.selectDropdown(data.toAcctField, 1)
    cy.clickElement(data.transferBtn)
    cy.seePage(data.transferCompleteField, data.transferCompleteVal)
})
    })


let data;
before(() => {
    cy.fixture("selectors.json").then((elem) => {
      data = elem.requestLoan;
    });
  });
  

describe('Request Loan Journey', () => {
it('Request Loan', () => {
    cy.insertLoginDetails()
    cy.clickElement(data.requestLoanLink)
    cy.seePage(data.requestLoanTitle, data. requestLoanVal)
    cy.typeInTextField(data.loanAmtField, data.loanAmtVal)
    cy.typeInTextField(data.downPaymentField, data.downPaymentVal)
    cy.selectDropdown(data.fromAcctDropdown, 1)
    cy.clickElement(data.applyBtn)
    cy.seePage(data.loanRequestPage, data.loanRequestVal)
    cy.seePage(data.loanCongratsField, data.loanCongratsVal)
})
    })

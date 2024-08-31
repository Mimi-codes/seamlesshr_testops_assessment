
let data;
before(() => {
    cy.fixture("selectors.json").then((elem) => {
      data = elem.logOut;
    });
  });
  

describe('Logout Journey', () => {
it('Logout', () => {
    cy.insertLoginDetails()
cy.clickElement(data.logOutLink)
cy.seePage(data.leftPanelData, data.leftPanelDataVal)
})
    })

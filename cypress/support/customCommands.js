//
let value;
before(() => {
  cy.fixture("selectors.json").then((elem) => {
    value = elem.loginPage;
  });
});


//Login
//Positive Login Journey
Cypress.Commands.add('insertLoginDetails', () => {
    cy.seePage(value.loginPageField, value.loginPageVal)
    cy.typeInTextField(value.usernameField, value.usernameVal)
    cy.typeInTextField(value.passwordField, value.passwordVal)
    cy.clickElement(value.loginBtn)
    cy.seePage(value.verifyLoginField, value.verifyLoginVal)
})


//CUSTOM COMMANDS
//Custom Command for clicking element
Cypress.Commands.add("clickElement", (elem) => {
    cy.get(elem).should('exist').click();
  });
  
  //Custom Command for typing in text field
  Cypress.Commands.add("typeInTextField", (field, value) => {
    cy.get(field).should('exist').and('be.visible').type(value);
  });

  //Custom Command for leaving an input field blank
  Cypress.Commands.add("blankField", (field) => {
    cy.get(field).should('be.empty').and('be.visible');
  });

  //Custom Command for verifying text on a page
  Cypress.Commands.add('seePage', (field, value) => {
    cy.get(field).should('exist').and('be.visible').should('contain', value)
  })

//Custom Command for selecting dropdown options
Cypress.Commands.add("selectDropdown", (elem, index) => {
    cy.get(elem).should('exist').should('contain', index).select(index);
  });
  
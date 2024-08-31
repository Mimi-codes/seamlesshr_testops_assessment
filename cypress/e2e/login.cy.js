
let data;
before(() => {
    cy.fixture("selectors.json").then((elem) => {
      data = elem.loginPage;
    });
  });
  
 
describe('Login Journey', () => {
it('Positive Login Journey', () => {
 cy.insertLoginDetails()
})

it('Negative Login Journey(Invalid Username)', () => {
  cy.seePage(data.loginPageField, data.loginPageVal)
    cy.typeInTextField(data.usernameField, data.invalidUsernameVal)
    cy.typeInTextField(data.passwordField, data.passwordVal )
    cy.clickElement(data.loginBtn)
    cy.seePage(data.errorField1, data.errorMssg1)
})

it('Negative Login Journey(Invalid Password)', () => {
    cy.seePage(data.loginPageField, data.loginPageVal)
    cy.typeInTextField(data.usernameField, data.usernameVal)
    cy.typeInTextField(data.passwordField, data.invalidPasswordVal)
    cy.clickElement(data.loginBtn)
    cy.seePage(data.errorField1, data.errorMssg1)
})

it('Negative Login Journey(Blank Login Details)', () => {
    cy.seePage(data.loginPageField, data.loginPageVal)
    cy.blankField(data.usernameField)
    cy.blankField(data.passwordField)
    cy.clickElement(data.loginBtn)
    cy.seePage(data.errorField1, data.errorMssg1)
    cy.seePage(data.errorField2, data.errorMssg2)
})
})

//imports faker (a dependency installed to generate fake test data)
import {faker} from '@faker-js/faker'

let data;
before(() => {
    cy.fixture("selectors.json").then((elem) => {
      data = elem.registrationPage;
    });
  });
  

describe('Registration Journey', () => {
it('Register', () => {
    cy.clickElement(data.registerLink);
    cy.seePage(data.registerPage, data.registerPageVal)
    cy.seePage(data.registerPage2, data.registerPageVal2)
    cy.typeInTextField(data.firstNameField, faker.person.firstName('female'))
    cy.typeInTextField(data.lastNameField, faker.person.lastName('male'))
    cy.typeInTextField(data.addressField, faker.address.city())
    cy.typeInTextField(data.cityField, faker.address.city())
    cy.typeInTextField(data.stateField, faker.address.state())
    cy.typeInTextField(data.zipCodeField, faker.address.zipCode())
    cy.typeInTextField(data.phoneField, faker.phone.number('+234##########'))
    cy.typeInTextField(data.ssnField, faker.phone.number("#####"))
    cy.typeInTextField(data.usernameField, faker.person.fullName())
    cy.typeInTextField(data.passwordField, data.passwordVal)
    cy.typeInTextField(data.confirmPasswordField, data.confirmPasswordVal)
    cy.clickElement(data.registerBtn)
    cy.seePage(data.signUpPageField, data.signUpPageVal)
    cy.seePage(data.signUpPageField2, data.signUpPageVal2)

})
    })
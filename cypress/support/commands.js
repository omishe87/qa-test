import { map } from 'lodash/fp'

const { _, Commands, config, env, mocha } = Cypress

Commands.add(
  'should_be_visible_and_have_texts',
  { prevSubject: 'element' },
  ($els, texts) => {
    cy.wrap($els).should('be.visible').then(map('innerText')).and('eql', texts)
  }
)

Commands.add('login', ({ email, password }) => {
  // Cypress doesn't always clean up cookies
  // https://github.com/cypress-io/cypress/issues/781
  cy.clearCookies()
  cy.visit('/')
  cy.get('li:nth-child(2) span a').click().wait(1000)
  cy.get('[type=text]').type(email, { delay: 0 })
  cy.get('[type=password]').type(password, { delay: 0 })
  cy.get('[type=submit]').click().wait(4000)
})

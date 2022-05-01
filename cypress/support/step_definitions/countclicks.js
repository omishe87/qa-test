import { recurse } from 'cypress-recurse'

const checkClicks = () => {
  cy.visit('analytics/statistics')
  cy.get('[type=submit]').click()
  return cy
    .get('[data-last-row="true"][data-column-index ="2"]')
    .invoke('text')
    .then(parseInt)
}
let clicksBefore

When('I go to default url', () => {
  cy.visit('overview/dashboard')

  cy.get('.url--1isxt').invoke('text').as('fromClipboard')

  cy.get('@fromClipboard').then((f) => {
    cy.origin('https://stripchat.com/', { args: { f } }, ({ f }) => {
      cy.visit(f)
    }).wait(500)
  })
})

Then('I see amount of click on analytic page', () => {
  checkClicks().then((clicks) => {
    clicksBefore = clicks
  })
})

Then('new click is shown in report', () => {
  recurse(
    () => checkClicks(),
    (n) => {
      expect(n).to.be.eq(clicksBefore + 1)
    },
    {
      limit: 30,
      timeout: 60000,
      delay: 2000
    }
  ).should('eq', clicksBefore + 1)
})

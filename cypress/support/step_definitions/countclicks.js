// const checkClicks = () => {
//   cy.visit('analytics/statistics')
//   cy.get('[type=submit]').click()
//   cy.get('[data-row-index="1"][data-column-index ="2"]').invoke('text')
// }

// Then('I see amount of click on analytic page', () => {
//   expect(clicksBefore).not.to.be.empty
// })

Then('new click is shown in report', () => {
  cy.visit('analytics/statistics')
  cy.get('[type=submit]').click()
  cy.get('[data-row-index="1"][data-column-index ="2"]')
    .invoke('text')
    .then(parseInt)
    .as('before')

  cy.visit('overview/dashboard')

  cy.get('.url--1isxt').invoke('text').as('fromClipboard')

  cy.get('@fromClipboard').then((f) => {
    cy.origin('https://ru.superchat.live/', { args: { f } }, ({ f }) => {
      cy.visit(f)
    }).wait(4000)
  })

  cy.visit('analytics/statistics').wait(6000)
  cy.get('[type=submit]').click()

  cy.get('[data-row-index="1"][data-column-index ="2"]')
    .invoke('text')
    .then(parseInt)
    .as('after')
    .then(function () {
      expect(this.after).to.be.eq(this.before + 1)
    })
})

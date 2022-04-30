// const howmanyClicksBefore = () => {
//   cy.
// }

Then('new click is shown in report', () => {
  cy.visit('overview/dashboard')
  cy.get('.buttons--lA5HM.after--2rVdf').click()

  cy.get('.url--1isxt').invoke('text').as('fromClipboard')

  cy.get('@fromClipboard').then((f) => {
    cy.origin('https://ru.superchat.live/', { args: { f } }, ({ f }) => {
      cy.visit(f)
    })
  })
  cy.visit('analytics/statistics')
  cy.get('[type=submit]').click()
})

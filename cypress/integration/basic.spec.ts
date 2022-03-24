
context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('Vue3 Api Demo')
      .should('exist')

    cy.get('a[href="/computed"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/computed')

    cy.wait(1000)

    cy.contains('show')
      .should('exist')

    cy.get('button#computed_toggle[type="button"]')
      .click()
      .contains('hide')
      .should('exist')
  })

  it('markdown', () => {
    cy.visit('http://localhost:3333/baseReactivity/isProxy')
      .get('pre.language-js')
      .should('exist')
  })
})

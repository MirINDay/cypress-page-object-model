/// <reference types="cypress" />

describe('Futured web', () => {

  beforeEach(() => {

    cy.visit('https://www.futured.app/')

    cy.get('#CybotCookiebotDialog')
      .should('be.visible')
    
    cy.get('#CybotCookiebotDialogBodyButtonAccept')
      .click()

  })

  it('opens menu and checks its items', () => {

      cy.contains('Menu')
        .click()

      cy.get('.menu-overlay__wrapper__inner li')
        .should('have.length', 7)
        .first()
        .should('have.text', '01Úvod')

      cy.get('.menu-overlay__wrapper__inner')
        .should('contain', '02Případové studie')
        .should('contain', '03Vývoj mobilních aplikací')
        .should('contain', '04Kontakt')
        .should('contain', '05Kariéra')
        .should('contain', '06Blog')
        .should('contain', '07Open-source')
        
  })

  it('changes language from cs to en', () => {

    cy.get('.homepage-slider__item__text__big')
      .should('contain', 'Stavíme mobilní byznysy')

    cy.get('.language-switcher .dropdown')
      .click()
      .find('li')
      .contains('EN')
      .click()

    cy.get('.homepage-slider__item__text__big')
      .should('contain', 'We are the mobile business builders')

  })
})
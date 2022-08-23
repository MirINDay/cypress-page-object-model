import homePage from "../page_objects/home-page"

describe('First Futured Automated Test', () => {

  beforeEach(() => {
    // cy.wait(500)
  })

  it('open website', () => {
    homePage.openHomePage();
  })

  it('accept cookies', () => {
    cy.get('#CybotCookiebotDialogBodyButtonAccept')
    .click();
  })
  
  it('open menu and check its items', () => {

    cy.get('[class="menu-toggler js-menu-open"]')
    // .should('be.visible')
    .click();

    cy.get('.menu-overlay__wrapper__inner')
      .should('be.visible')
      .should('contain', '01Úvod')
      .should('contain', '03Vývoj mobilních aplikací')
      .should('contain', '02Případové studie')
      .should('contain', '03Vývoj mobilních aplikací')
      .should('contain', '04Kontakt')
      .should('contain', '05Kariéra')
      .should('contain', '06Blog')
      .should('contain', '07Open-source');
  })

  it('take screenshot', () => {
    cy.wait(2000)
    cy.matchScreenshot('Menu');
  })

  it('check if CZ is default language', () => {

    cy.get('[class="navigation-main__link"]')
      .should('contain', 'Napište nám');
    })

  it('change language from CZ to EN', () => {

    cy.get('[class="language-switcher "] [class="dropdown"]')
      .click();

    cy.get('[class="language-switcher "] [class="dropdown"] li:nth-of-type(2)')
    .click();
      
    if (cy.get('[class="language-switcher "] [class="dropdown"]').contains('CZ')) {
      cy.log('Language is still CZ');

      cy.get('[class="language-switcher "] [class="dropdown"]')
      .click();
      
      cy.get('[class="language-switcher "] [class="dropdown"] li:nth-of-type(2)')
      .click();
    }
  })

  it('check if EN set as language', () => {
    cy.get('[class="language-switcher "] [class="dropdown"]')
      .contains('EN')

    cy.get('[class="navigation-main__link"]')
      .should('contain', 'Contact Us');
  })
})
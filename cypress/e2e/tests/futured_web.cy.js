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
    .click()
   // .should('not.be.visible');
  })
  
  it('open menu and check its items', () => {

    cy.get('[class="menu-toggler js-menu-open"]')
    // .should('be.visible')
    .click();

    cy.get('.menu-overlay__wrapper__inner')
      .should('have.length', 1)
      .and('contain', '01Úvod')
      .and('contain', '03Vývoj mobilních aplikací')
      .and('contain', '02Případové studie')
      .and('contain', '03Vývoj mobilních aplikací')
      .and('contain', '04Kontakt')
      .and('contain', '05Kariéra')
      .and('contain', '06Blog')
      .and('contain', '07Open-source');
 
    cy.get('.menu-overlay__wrapper__inner span[class="inner"]').should(($list) => {
      expect($list).to.have.length(7)
      expect($list.eq(0)).to.contain('Úvod')
      ($list.eq(1)).to.contain('Případové studie')
      expect($list.eq(2)).to.contain('Vývoj mobilních aplikací')
      expect($list.eq(6)).to.contain('Open-source')
    })
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
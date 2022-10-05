class HomePage{
openWebsite() {
    cy.visit('https://www.futured.app/');
}
clickCookies(){
cy.get('[id="CybotCookiebotDialogBodyButtonAccept"]')
.click();

}

clickMenu() {
    cy.get('[class="open"]')
    .click(); 
    }

}
export default new HomePage()


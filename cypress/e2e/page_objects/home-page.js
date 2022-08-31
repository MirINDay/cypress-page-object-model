class HomePage {

    url = 'https://www.futured.app/';
    menu = '.neco'

    openHomePage() {
        cy.visit(this.url);
        cy.get(this.menu)
    }
}
export default new HomePage();
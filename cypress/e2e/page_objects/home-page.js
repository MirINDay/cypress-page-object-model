class HomePage {

    url = 'https://www.futured.app/';

    openHomePage() {
        cy.visit(this.url);
    }
}
export default new HomePage();
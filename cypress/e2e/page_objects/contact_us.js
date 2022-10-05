class ContcatUs{

    clickContactUs(){
        cy.get('class=contact-page__cta')
        .click();
    }
    

    
}
    
    export default new ContcatUs()
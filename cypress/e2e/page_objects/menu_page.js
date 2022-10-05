class MenuPage{

    clickContact(){
        cy.get('[class="menu-overlay__item"]:nth-of-type(4) [class="inner"]')
    
        .click();
    }
    

    
}
    
    export default new MenuPage()
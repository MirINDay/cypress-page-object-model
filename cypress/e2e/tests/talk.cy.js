/// <reference types="cypress" />
import homePage from "../page_objects/home_page";
import menuPage from "../page_objects/menu_page";
import contactUs from "../page_objects/contact_us";

describe('Futured web', () => {
 
  it('opens website', () => {
homePage.openWebsite();
homePage.clickCookies();
 homePage.clickMenu();
 menuPage.clickContact();
 contactUs.clickContactUs()
  })
})
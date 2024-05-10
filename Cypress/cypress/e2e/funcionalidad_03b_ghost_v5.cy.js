import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import { beforeEach } from 'mocha';
import Tags from './PageObjects/Tags';

describe('funcionalidad3b', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
      });

    let tagName = faker.lorem.word();
    let tagDescription = faker.lorem.paragraph();

 

    it('EP13-CREAR-VACIO', async () => {

        cy.viewport(1920, 1080);
        await Login.gotoLogin();  
        await Login.setLoginEmail();
        await Login.setLoginPassword();
        //await cy.screenshot('G5/EP13_1_login', { 'overwrite': true });
        await Login.submitLogin();
        //await cy.screenshot('G5/EP13_2_dashboard', { 'overwrite': true });
        await Tags.gotoTagsPageV5();
        //await cy.screenshot('G5/EP12_3_tags', { 'overwrite': true });
        await Tags.gotoNewtagPageV5();
        await Tags.saveTagV5();
        //await cy.screenshot('G5/EP12_4_dashboard', { 'overwrite': true });
        await Tags.validateRestriction();
    
      });
    
     
    
      it('EP15-Crear-Tag-inteno', async () => {
    
        cy.viewport(1920, 1080);
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G5/"EP15_1_login', { 'overwrite': true });
        Login.submitLogin();
         cy.screenshot('G5/"EP15_2_dashboard', { 'overwrite': true });
        await Tags.gotoTagsPage();
         cy.screenshot('G5/"EP15_3_tags', { 'overwrite': true });
        await Tags.internalTag();
         cy.screenshot('G5/"EP15_4_internal_tag', { 'overwrite': true });
        await Tags.gotoNewtagPage();
         cy.screenshot('G5/"EP15_5_new_tag', { 'overwrite': true });
        await Tags.setTagName("#"+tagName);
        await Tags.setTagDescription(tagDescription);
        await Tags.setColor();
        await Tags.saveTag();
        await Tags.gotoTagsPage();
         cy.screenshot('G5/"EP15_6_dashboard', { 'overwrite': true });
        await Tags.internalTag();
         cy.screenshot('G5/"EP15_7_internal_tag', { 'overwrite': true });
        await Tags.validateTag("#"+tagName);
      });
    
        
    
    

})


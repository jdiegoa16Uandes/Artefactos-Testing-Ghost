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
    
      it('EP15-CREAR-TAG-INTERNO', async () => {
    
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        Login.submitLogin();
    // cy.screenshot('G5/EP11_2_dashboard', { 'overwrite': true });
         await Tags.gotoTagsPageV5();
    //cy.screenshot('G5/EP11_3_tags', { 'overwrite': true });
     await Tags.gotoNewtagPageV5();
    //cy.screenshot('G5/EP11_4_new_Tag', { 'overwrite': true });
     await Tags.setTagName("pepe");
     await Tags.setTagDescription("pepe1");
     await Tags.setColorV5("red");
        await Tags.validateErrorColor();
    
      });
    
        
    
    

})


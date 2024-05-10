import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import { beforeEach } from 'mocha';
import Tags from './PageObjects/Tags';



describe('funcionalidad3a', () => {


  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });


  let tagName = faker.lorem.word();
  let tagDescription = faker.lorem.paragraph();

  let tagNameEdit = faker.lorem.word();
  let tagDescriptionEdit = faker.lorem.paragraph();
  


  

  it('EP11-CREAR-TAG', async () => {

     cy.viewport(1920, 1080);
     await Login.gotoLogin();  
     await Login.setLoginEmail();
     await Login.setLoginPassword();
     //await cy.screenshot('G5/EP11_1_login', { 'overwrite': true });
     await Login.submitLogin();
     //await cy.screenshot('G5/EP11_2_dashboard', { 'overwrite': true });
     await Tags.gotoTagsPageV5();
     //await cy.screenshot('G5/EP11_3_tags', { 'overwrite': true });
     await Tags.gotoNewtagPageV5();
     //await cy.screenshot('G5/EP11_4_new_Tag', { 'overwrite': true });
     await Tags.setTagName(tagName);
     await Tags.setTagDescription(tagDescription);
     await Tags.saveTagV5();
     await Tags.gotoTagsPageV5();
     //await cy.screenshot('G5/EP11_5_dashboard', { 'overwrite': true });
     await Tags.validateTagV5(tagName);
    
  })

  it('EP12-EDITAR-TAG', async () => {

    cy.viewport(1920, 1080);
    await Login.gotoLogin();  
    await Login.setLoginEmail();
    await Login.setLoginPassword();
    //await cy.screenshot('G5/EP12_1_login', { 'overwrite': true });
    await Login.submitLogin();
    //await cy.screenshot('G5/EP12_2_dashboard', { 'overwrite': true });
    await Tags.gotoTagsPageV5();
    //await cy.screenshot('G5/EP12_3_tags', { 'overwrite': true });
    await Tags.findTagV5(tagName);
    //await cy.screenshot('G5/EP12_4_tag_edit', { 'overwrite': true });
    await Tags.setTagName(tagNameEdit);
    await Tags.setTagDescription(tagDescriptionEdit);
    await Tags.saveTagV5();
    await Tags.gotoTagsPageV5();
    //await cy.screenshot('G5/EP12_5_dashboard', { 'overwrite': true });
    await Tags.validateTagV5(tagNameEdit);
   
  });

  it('EP14-ELIMINAR-TAG', async () => {
    
    cy.viewport(1920, 1080);
    await Login.gotoLogin();  
     Login.setLoginEmail();
     Login.setLoginPassword();
    //await cy.screenshot('G5/EP14_1_login', { 'overwrite': true });
    await Login.submitLogin();
    //await cy.screenshot('G5/EP14_2_dashboard',{ 'overwrite': true });
    await Tags.gotoTagsPageV5();
    await cy.screenshot('G5/EP14_3_tags',{ 'overwrite': true });
    await Tags.findTagV5(tagName);
    await Tags.deleteTagV5();
    //await cy.screenshot('G5/EP15_4_delete_tag',{ 'overwrite': true });
    await Tags.gotoTagsPageV5();
    
    await Tags.validateDeleteTagV5(tagName);
    await cy.screenshot('G5/EP15_5_dashboard',{ 'overwrite': true });
  });

   

})
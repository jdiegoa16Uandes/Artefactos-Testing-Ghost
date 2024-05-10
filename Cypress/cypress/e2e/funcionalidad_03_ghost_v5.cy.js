import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import { beforeEach } from 'mocha';
import Tags from './PageObjects/Tags';



describe('template spec', () => {


  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });


  let tagName = faker.lorem.word();
  let tagDescription = faker.lorem.paragraph();

  let tagNameEdit = faker.lorem.word();
  let tagDescriptionEdit = faker.lorem.paragraph();
  

  it('EP11-CREAR-TAG', async () => {

     cy.viewport(1920, 1080);
     Login.gotoLogin();  
     Login.setLoginEmail();
     Login.setLoginPassword();
     //await cy.screenshot('G5/EP11_1_login', { 'overwrite': true });
     Login.submitLogin();
     await Tags.gotoTagsPageV5();
     //await cy.screenshot('G5/EP11_2_dashboard', { 'overwrite': true });
     await Tags.gotoNewtagPageV5();
     //await cy.screenshot('G5/EP11_3_tags', { 'overwrite': true });
    //await cy.screenshot('G5/EP11_4_new_Tag', { 'overwrite': true });
     Tags.setTagName(tagName);
     Tags.setTagDescription(tagDescription);
     await Tags.saveTagV5();
     await Tags.gotoTagsPageV5();
     //await cy.screenshot('G5/EP11_5_dashboard', { 'overwrite': true });
     await Tags.validateTagV5(tagName);
    
  })

  // it('EP12-EDITAR-TAG', async () => {

  //   cy.viewport(1920, 1080);
  //   Login.gotoLogin();  
  //   Login.setLoginEmail();
  //   Login.setLoginPassword();
  //   await cy.screenshot('G5/EP12_1_login', { 'overwrite': true });
  //   await Login.submitLogin();
  //   await cy.screenshot('G5/EP12_2_dashboard', { 'overwrite': true });
  //   await Tags.gotoTagsPage();
  //   await cy.screenshot('G5/EP12_3_tags', { 'overwrite': true });
  //   await Tags.editarTag();
  //   await cy.screenshot('G5/EP12_4_tag_edit', { 'overwrite': true });
  //   let tagName = faker.lorem.word();
  //   let tagDescription = faker.lorem.paragraph();
  //   await Tags.setTagName(tagName);
  //   await Tags.setTagDescription(tagDescription);
  //   await Tags.setColor();
  //   await  Tags.saveTag();
  //   await Tags.gotoTagsPage();
  //    await cy.screenshot('G5/EP12_5_dashboard', { 'overwrite': true });
  //    await Tags.validateTag(tagName);

  // });

  // it('EP13-CREAR-VACIO', async () => {

  //   cy.viewport(1920, 1080);
  //   Login.gotoLogin();  
  //   Login.setLoginEmail();
  //   Login.setLoginPassword();
  //   await cy.screenshot('G5/EP13_1_login', { 'overwrite': true });
  //   await Login.submitLogin();
  //   await cy.screenshot('G5/EP13_2_dashboard', { 'overwrite': true });
  //   await Tags.gotoTagsPage();
  //   await cy.screenshot('G5/EP13_3_tags', { 'overwrite': true });
  //   await Tags.gotoNewtagPage();
  //   await cy.screenshot('G5/EP13_4_new_tag', { 'overwrite': true });
  //   await Tags.saveTag();
  //   await cy.screenshot('G5/EP13_5_restriction', { 'overwrite': true });
  //   await Tags.validateRestriction();


  // })

  // it('EP14-Eliminar-Tag', async () => {
    
  //   cy.viewport(1920, 1080);
  //   Login.gotoLogin();  
  //   Login.setLoginEmail();
  //   Login.setLoginPassword();
  //   //await cy.screenshot('G5/EP14_1_login', { 'overwrite': true });
  //   Login.submitLogin();
  //   await cy.screenshot('G5/EP14_2_dashboard', { 'overwrite': true });
  //   await Tags.gotoTagsPage();
  //   await cy.screenshot('G5/EP14_3_tags', { 'overwrite': true });
  //   await Tags.deleteTag();
  //   await cy.screenshot('G5/EP15_4_delete_tag', { 'overwrite': true });
  //   await Tags.gotoTagsPage();
  //   var tagName = faker.lorem.word();
  //   await Tags.validateTag(tagName);
  //   await cy.screenshot('G5/EP15_5_dashboard', { 'overwrite': true });
  // });

  // it('EP15-Crear-Tag-inteno', async () => {

  //   cy.viewport(1920, 1080);
  //   Login.gotoLogin();  
  //   Login.setLoginEmail();
  //   Login.setLoginPassword();
  //   await cy.screenshot('G5/"EP15_1_login', { 'overwrite': true });
  //   Login.submitLogin();
  //   await cy.screenshot('G5/"EP15_2_dashboard', { 'overwrite': true });
  //   await Tags.gotoTagsPage();
  //   await cy.screenshot('G5/"EP15_3_tags', { 'overwrite': true });
  //   await Tags.internalTag();
  //   await cy.screenshot('G5/"EP15_4_internal_tag', { 'overwrite': true });
  //   await Tags.gotoNewtagPage();
  //   await cy.screenshot('G5/"EP15_5_new_tag', { 'overwrite': true });
  //   await Tags.setTagName("#"+tagName);
  //   await Tags.setTagDescription(tagDescription);
  //   await Tags.setColor();
  //   await Tags.saveTag();
  //   await Tags.gotoTagsPage();
  //   await cy.screenshot('G5/"EP15_6_dashboard', { 'overwrite': true });
  //   await Tags.internalTag();
  //   await cy.screenshot('G5/"EP15_7_internal_tag', { 'overwrite': true });
  //   await Tags.validateTag("#"+tagName);
  // });


})
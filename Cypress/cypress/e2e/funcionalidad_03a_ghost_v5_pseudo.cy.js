import Login from './PageObjects/Login';
import { beforeEach } from 'mocha';
import Tags from './PageObjects/Tags';



describe('funcionalidad-3-apriori-a', () => {

    let element;
    let element2;

  beforeEach(async ()  => {


    //cy.wait(5000);

   

    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });

  before(() => {
      
    
    cy.readFile('Data/Tags.json').then((data) => {
        let randomIndex = Math.floor(Math.random() * data.length);
        element = data[randomIndex];
    });
    cy.readFile('Data/Tags.json').then((data) => {
        let randomIndex = Math.floor(Math.random() * data.length);
        element2 = data[randomIndex];
    });
});
  
it('EP11-CREAR-TAG', async () => {

    //cy.viewport(1920, 1080);
     Login.gotoLogin();
     Login.setLoginEmail();
     Login.setLoginPassword();
     Login.submitLogin();
   // cy.screenshot('G5/EP11_2_dashboard', { 'overwrite': true });
    await Tags.gotoTagsPageV5();
   //cy.screenshot('G5/EP11_3_tags', { 'overwrite': true });
    await Tags.gotoNewtagPageV5();
   //cy.screenshot('G5/EP11_4_new_Tag', { 'overwrite': true });
    await Tags.setTagName(element.tag);
    await Tags.setTagDescription(element.descripcion);
    await Tags.saveTagV5();
    await Tags.gotoTagsPageV5();
   //cy.screenshot('G5/EP11_5_tags', { 'overwrite': true });
    await Tags.validateTagV5(element.tag);
   
 })

 it('EP12-EDITAR-TAG', async () => {

   Login.gotoLogin();
   Login.setLoginEmail();
   Login.setLoginPassword();
   Login.submitLogin();
   //cy.viewport(1920, 1080);

  //cy.screenshot('G5/EP12_2_dashboard', { 'overwrite': true });
   await Tags.gotoTagsPageV5();
  //cy.screenshot('G5/EP12_3_tags', { 'overwrite': true });
   await Tags.findTagV5(element.tag.toLowerCase() );
  //cy.screenshot('G5/EP12_4_tag_edit', { 'overwrite': true });
   await Tags.setTagName(element2.tag);
   await Tags.setTagDescription(element2.descripcion);
   await Tags.saveTagV5();
   await Tags.gotoTagsPageV5();
  //cy.screenshot('G5/EP12_5_dashboard', { 'overwrite': true });
   await Tags.validateTagV5(element2.tag);
  
 });

 it('EP14-ELIMINAR-TAG', async () => {
    Login.gotoLogin();
    Login.setLoginEmail();
    Login.setLoginPassword();
    Login.submitLogin();
  //cy.screenshot('G5/EP14_2_dashboard',{ 'overwrite': true });
   await Tags.gotoTagsPageV5();
   //await cy.screenshot('G5/EP14_3_tags',{ 'overwrite': true });
   await Tags.findTagV5(element.tag);
   await Tags.deleteTagV5();
  //cy.screenshot('G5/EP14_4_delete_tag',{ 'overwrite': true });
   await Tags.gotoTagsPageV5();
   
   await Tags.validateDeleteTagV5(element2.tag);
    //cy.screenshot('G5/EP14_5_dashboard',{ 'overwrite': true });
 });



})
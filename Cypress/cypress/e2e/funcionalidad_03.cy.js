import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';
import { beforeEach } from 'mocha';
//import {gotoTagsPage , gotoNewtagPage} from './PageObjects/Tags';
import Tags from './PageObjects/Tags';



describe('template spec', () => {

  beforeEach(() => {

    Login.gotoLogin();  
    Login.setLoginEmail();
    Login.setLoginPassword();
    Login.submitLogin();
    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });


  it('EP-Crear-tag', () => {
    
    let tagName = faker.lorem.word();
    let tagDescription = faker.lorem.paragraph();
    // Given
     Tags.gotoTagsPage();
     Tags.gotoNewtagPage();
    // When
     Tags.setTagName(tagName);
     Tags.setTagDescription(tagDescription);
     Tags.setColor();
     Tags.saveTag();

     //Then
     Tags.gotoTagsPage();
     Tags.validateTag(tagName);



     //Tags.setTagImage();

    //  cy.fixture('../fixtures/pato.png').then(fileContent => {
    //   cy.get('input[type="file"]').selectFile(fileContent, {action: "drag-drop"});
    // });

    // cy.fixture('../fixtures/pato.png', 'base64').then(fileContent => {
    //   cy.get('input[type="file"]').attachFile({
    //     fileContent: fileContent,
    //     fileName: 'imagen.png',
    //     mimeType: 'image/png'
    //   });
    // });
    

      

  
    // Tags.setTagName();
    // Tags.saveTag();
    // // Then
    // Tags.validateTag();
  })


})
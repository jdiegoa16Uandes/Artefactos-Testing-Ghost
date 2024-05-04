import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';
import { beforeEach } from 'mocha';
//import {gotoTagsPage , gotoNewtagPage} from './PageObjects/Tags';
import Tags from './PageObjects/Tags';



describe('template spec', () => {
  let tagName = faker.lorem.word();
  let tagDescription = faker.lorem.paragraph();

  beforeEach(() => {

    Login.gotoLogin();  
    Login.setLoginEmail();
    Login.setLoginPassword();
    Login.submitLogin();
    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });


  it('EP11-CREAR-TAG', () => {
    
    
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
  })

  it('EP12-EDITAR-TAG', () => {
    Tags.gotoTagsPage();
    Tags.editarTag();

    let tagName = faker.lorem.word();
    let tagDescription = faker.lorem.paragraph();
    Tags.setTagName(tagName);
     Tags.setTagDescription(tagDescription);
     Tags.setColor();
     Tags.saveTag();

     //Then
     Tags.gotoTagsPage();
     Tags.validateTag(tagName);

  });

  it('EP13-CREAR-VACIO',()=> {
    Tags.gotoTagsPage();
    Tags.gotoNewtagPage();
    Tags.saveTag();
    Tags.validateRestriction();


  })


  it('EP14-Eliminar-Tag', () => {

    Tags.gotoTagsPage();
    Tags.deleteTag();
   

  });

  it('EP15-Crear-Tag-inteno', () => {
        Tags.gotoTagsPage();
        Tags.internalTag();
        Tags.gotoNewtagPage();
        Tags.setTagName("#"+tagName);
        Tags.setTagDescription(tagDescription);
        Tags.setColor();
       Tags.saveTag();
       Tags.gotoTagsPage();
       Tags.internalTag();
       Tags.validateTag("#"+tagName);
  });


})
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
        Login.gotoLogin(3);  
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G3/EP11_1_login', { 'overwrite': true });
        await Login.submitLogin(3);
        await cy.screenshot('G5/EP11_2_dashboard', { 'overwrite': true });
        await Tags.gotoTagsPageV3();
        await cy.screenshot('G5/EP11_3_tags', { 'overwrite': true });
        await Tags.gotoNewtagPageV3();
        await cy.screenshot('G5/EP11_3_new_tag', { 'overwrite': true });
        await Tags.setTagName(tagName);
        await Tags.setTagDescription(tagDescription);
        await Tags.saveTagV3();
        await Tags.gotoTagsPageV3();
        await Tags.validateTagV3(tagName);
        await cy.screenshot('G5/EP11_3_tags', { 'overwrite': true });

    })

    it('EP12-EDITAR-TAG', async () => {

        cy.viewport(1920, 1080);
        Login.gotoLogin(3);  
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G3/EP12_1_login', { 'overwrite': true });
        await Login.submitLogin(3);
        await cy.screenshot('G3/EP12_2_dashboard', { 'overwrite': true });
        await Tags.gotoTagsPageV3();
        await cy.screenshot('G3/EP12_3_tags', { 'overwrite': true });
        await Tags.findTagV3(tagName);
        await cy.screenshot('G3/EP12_4_tag_edit', { 'overwrite': true });
        await Tags.setTagName(tagNameEdit);
        await Tags.setTagDescription(tagDescriptionEdit);
        await Tags.saveTagV3();
        await Tags.gotoTagsPageV3();
        await cy.screenshot('G3/EP12_5_dashboard', { 'overwrite': true });
        await Tags.validateTagV3(tagNameEdit);
        



    });

    it('EP13-ELIMINAR-TAG', async () => {

        cy.viewport(1920, 1080);
        Login.gotoLogin(3);  
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G3/EP13_1_login', { 'overwrite': true });
        await Login.submitLogin(3);
        await cy.screenshot('G5/EP13_2_dashboard', { 'overwrite': true });
        await Tags.gotoTagsPageV3();
        await cy.screenshot('G3/EP13_3_tags', { 'overwrite': true });
        await Tags.findTagV3(tagName);
        await cy.screenshot('G3/EP15_4_delete_tag', { 'overwrite': true });
        await Tags.deleteTagV3();
        await cy.screenshot('G3/EP15_5_dashboard', { 'overwrite': true });
        await Tags.validateDeleteTagV3(tagName+tagDescriptionEdit);
       

    });

})
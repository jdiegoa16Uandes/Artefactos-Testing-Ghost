
import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import { beforeEach } from 'mocha';
import Posts from './PageObjects/Posts';

describe('template spec', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });

    it('EP06 - Modificar titulo post existente', async () => {

        const newData = {
            'modifiedTitle': faker.lorem.word()
        };
        cy.viewport(1920, 1080);

        // Given
        Login.gotoLogin(3); 
        cy.wait(2000); 
        Login.setLoginEmail();
        cy.wait(2000);
        Login.setLoginPassword();
        cy.wait(2000);
        await cy.screenshot('G3/EP6_1_login', { 'overwrite': true });
        Login.submitLogin(3);
        cy.wait(2000);
        await cy.screenshot('G3/EP6_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoPostPublished();
        cy.wait(2000);
        await cy.screenshot('G3/EP6_3_postsPublished', { 'overwrite': true });
        await Posts.gotoPost();
        cy.wait(2000);
        await cy.screenshot('G3/EP6_4_postSelected', { 'overwrite': true });
        
        //When

        await Posts.modifyTitlev3(newData.modifiedTitle);
        cy.wait(2000);
        await cy.screenshot('G3/EP6_5_modifiedTitle', { 'overwrite': true });
        await Posts.updatePostv3();
        cy.wait(2000);
        await cy.screenshot('G3/EP6_6_postUpdated', { 'overwrite': true });
        await Dashboard.gotoPostPublished();
        cy.wait(2000);
        await cy.screenshot('G3/EP6_7_postsUpdated', { 'overwrite': true });

        

        // Then

        Posts.validatePost(newData.modifiedTitle);
        });


    it('EP09 - hacer Unpublish', async () => {

        const newData = {
            'modifiedTitle': faker.lorem.word()
        };
        cy.viewport(1920, 1080);

        // Given
        Login.gotoLogin(3); 
        cy.wait(2000); 
        Login.setLoginEmail();
        cy.wait(2000);
        Login.setLoginPassword();
        cy.wait(2000);
        await cy.screenshot('G3/EP9_1_login', { 'overwrite': true });
        Login.submitLogin(3);
        cy.wait(2000);
        await cy.screenshot('G3/EP9_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoPostPublished();
        cy.wait(2000);
        await cy.screenshot('G3/EP9_3_postsPublished', { 'overwrite': true });
        await Posts.gotoPost();
        cy.wait(2000);
        await cy.screenshot('G3/EP9_4_postSelected', { 'overwrite': true });
        await Posts.modifyTitlev3(newData.modifiedTitle);
        cy.wait(2000);
        await cy.screenshot('G3/EP9_5_modifiedTitle', { 'overwrite': true });
        await Posts.updatePostv3();
        cy.wait(2000);
        await cy.screenshot('G3/EP9_6_postUpdated', { 'overwrite': true });
       

        // When

        await Posts.gotoUnpublishv3();
        cy.wait(2000);
        await cy.screenshot('G3/EP9_7_confirmUnpublish', { 'overwrite': true });
        await Posts.confirmUnpublishv3();
        cy.wait(4000);
        await cy.screenshot('G3/EP9_8_postUnpublished', { 'overwrite': true });
        await Posts.gotoPostPublishedv3();
        


        // Then

        Posts.validateNotTitle(newData.modifiedTitle);
        //con esto se valida que el post ya no aparece en published

        });   
        
        
});

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
        Login.gotoLogin(); 
        cy.wait(2000); 
        Login.setLoginEmail();
        cy.wait(2000);
        Login.setLoginPassword();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_1_login', { 'overwrite': true });
        Login.submitLogin();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoPostPublished();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_3_postsPublished', { 'overwrite': true });
        await Posts.gotoPost();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_4_postSelected', { 'overwrite': true });
       

        // When

        await Posts.modifyTitle(newData.modifiedTitle);
        cy.wait(2000);
        await cy.screenshot('G5/EP6_5_modifiedTitle', { 'overwrite': true });
        await Posts.updatePost();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_6_postUpdated', { 'overwrite': true });
        await Dashboard.gotoPostPublished();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_7_postsUpdated', { 'overwrite': true });

        

        // Then

        Posts.validatePost(newData.modifiedTitle);
        });

        it('EP07 - Modificar texto post existente', async () => {

            const newData = {
                'modifiedText': faker.lorem.sentence()
            };
            cy.viewport(1920, 1080);
            // Given
            Login.gotoLogin(); 
            cy.wait(2000); 
            Login.setLoginEmail();
            cy.wait(2000);
            Login.setLoginPassword();
            cy.wait(2000);
            await cy.screenshot('G5/EP7_1_login', { 'overwrite': true });
            Login.submitLogin();
            cy.wait(2000);
            await cy.screenshot('G5/EP7_2_dashboard', { 'overwrite': true });
            await Dashboard.gotoPostPublished();
            cy.wait(2000);
            await cy.screenshot('G5/EP7_3_postsPublished', { 'overwrite': true });
            await Posts.gotoPost();
            cy.wait(2000);
            await cy.screenshot('G5/EP7_4_postSelected', { 'overwrite': true });
           
    
            // When
    
            await Posts.modifyText(newData.modifiedText)
            cy.wait(2000);
            await cy.screenshot('G5/EP7_5_modifiedText', { 'overwrite': true });
            await Posts.updatePost();
            cy.wait(2000);
            await cy.screenshot('G5/EP7_6_postUpdated', { 'overwrite': true });
            
            
    
            // Then
            Posts.validatePostContent2(newData.modifiedText)
        });
        
        it('EP08 - Modificar titulo post existente y salir sin guardar cambios', async () => {

            const newData = {
                'modifiedTitle': faker.lorem.word()
            };
            cy.viewport(1920, 1080);
            // Given
            Login.gotoLogin(); 
            cy.wait(2000); 
            Login.setLoginEmail();
            cy.wait(2000);
            Login.setLoginPassword();
            cy.wait(2000);
            await cy.screenshot('G5/EP8_1_login', { 'overwrite': true });
            Login.submitLogin();
            cy.wait(2000);
            await cy.screenshot('G5/EP8_2_dashboard', { 'overwrite': true });
            await Dashboard.gotoPostPublished();
            cy.wait(2000);
            await cy.screenshot('G5/EP8_3_postsPublished', { 'overwrite': true });
            await Posts.gotoPost();
            cy.wait(2000);
            await cy.screenshot('G5/EP8_4_postSelected', { 'overwrite': true });
           
    
            // When
    
            await Posts.modifyTitle(newData.modifiedTitle);
            cy.wait(2000);
            await cy.screenshot('G5/EP8_5_modifiedTitle', { 'overwrite': true });
            await Dashboard.gotoPostPublished();
            cy.wait(2000);
            await cy.screenshot('G5/EP8_6_confirmationWindow', { 'overwrite': true });
            await Posts.confirmLeaveWithoutSave()
            
    
            // Then

            Posts.validateNotTitle(newData.modifiedTitle);
            });

        it('EP09 - hacer Unpublish', async () => {

                const newData = {
                    'modifiedTitle': faker.lorem.word()
                };
                cy.viewport(1920, 1080);
        
                // Given
                Login.gotoLogin(); 
                cy.wait(2000); 
                Login.setLoginEmail();
                cy.wait(2000);
                Login.setLoginPassword();
                cy.wait(2000);
                await cy.screenshot('G5/EP9_1_login', { 'overwrite': true });
                Login.submitLogin();
                cy.wait(2000);
                await cy.screenshot('G5/EP9_2_dashboard', { 'overwrite': true });
                await Dashboard.gotoPostPublished();
                cy.wait(2000);
                await cy.screenshot('G5/EP9_3_postsPublished', { 'overwrite': true });
                await Posts.gotoPost();
                cy.wait(2000);
                await cy.screenshot('G5/EP9_4_postSelected', { 'overwrite': true });
                await Posts.modifyTitle(newData.modifiedTitle);
                cy.wait(2000);
                await cy.screenshot('G5/EP9_5_modifiedTitle', { 'overwrite': true });
                await Posts.updatePost();
                cy.wait(2000);
                await cy.screenshot('G5/EP9_6_postUpdated', { 'overwrite': true });
               
        
                // When

                await Posts.gotoUnpublish();
                cy.wait(2000);
                await cy.screenshot('G5/EP9_7_confirmUnpublish', { 'overwrite': true });
                await Posts.confirmUnpublish();
                cy.wait(2000);
                await cy.screenshot('G5/EP9_8_postUnpublished', { 'overwrite': true });
                await Dashboard.gotoPostPublished();
                


                // Then
        
                Posts.validateNotTitle(newData.modifiedTitle);
                //con esto se valida que el post ya no aparece en published

                });       

        it('EP10 - Borrar post', async () => {

            const newData = {
                'modifiedTitle': faker.lorem.word()
            };
            cy.viewport(1920, 1080);
    
            // Given
            Login.gotoLogin(); 
            cy.wait(2000); 
            Login.setLoginEmail();
            cy.wait(2000);
            Login.setLoginPassword();
            cy.wait(2000);
            await cy.screenshot('G5/EP10_1_login', { 'overwrite': true });
            Login.submitLogin();
            cy.wait(2000);
            await cy.screenshot('G5/EP10_2_dashboard', { 'overwrite': true });
            await Dashboard.gotoPostPublished();
            cy.wait(2000);
            await cy.screenshot('G5/EP10_3_postsPublished', { 'overwrite': true });
            await Posts.gotoPost();
            cy.wait(2000);
            await cy.screenshot('G5/EP10_4_postSelected', { 'overwrite': true });
            await Posts.modifyTitle(newData.modifiedTitle);
            cy.wait(2000);
            await cy.screenshot('G5/EP10_5_modifiedTitle', { 'overwrite': true });
            await Posts.updatePost();
            cy.wait(2000);
            await cy.screenshot('G5/EP10_6_postUpdated', { 'overwrite': true });
           
    
            // When

            await Posts.openSettings();
            cy.wait(2000);
            await cy.screenshot('G5/EP10_7_settings', { 'overwrite': true });
            await Posts.deletePost();
            cy.wait(2000);
            await cy.screenshot('G5/EP10_8_confirmDelete', { 'overwrite': true });
            await Posts.confirmDeletePost();
        
            // Then

            Posts.validateNotTitle(newData.modifiedTitle);
            //con esto se valida que el post ya no aparece en published
            }); 

});
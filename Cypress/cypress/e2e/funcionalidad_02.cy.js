
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

        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        Login.submitLogin();
        await Dashboard.gotoPostPublished();
        await Posts.gotoPost();
       

        // When

        await Posts.modifyTitle(newData.modifiedTitle);
        await Posts.updatePost();
        await Dashboard.gotoPostPublished();
        

        // Then

        Posts.validatePost(newData.modifiedTitle);
        });

        it('EP07 - Modificar texto post existente', async () => {

            const newData = {
                'modifiedText': faker.lorem.sentence()
            };
    
            // Given
            Login.gotoLogin();  
            cy.wait(2000);
            Login.setLoginEmail();
            cy.wait(2000);
            Login.setLoginPassword();
            cy.wait(2000);
            Login.submitLogin();
            cy.wait(1000);
            await Dashboard.gotoPostPublished();
            await Posts.gotoPost();
           
    
            // When
    
            await Posts.modifyText(newData.modifiedText)
            await Posts.updatePost();
            
            
    
            // Then
            Posts.validatePostContent2(newData.modifiedText)
        });
        
        it('EP08 - Modificar titulo post existente y salir sin guardar cambios', async () => {

            const newData = {
                'modifiedTitle': faker.lorem.word()
            };
    
            // Given
            Login.gotoLogin();  
            cy.wait(2000);
            Login.setLoginEmail();
            cy.wait(2000);
            Login.setLoginPassword();
            cy.wait(2000);
            Login.submitLogin();
            cy.wait(1000);
            await Dashboard.gotoPostPublished();
            await Posts.gotoPost();
           
    
            // When
    
            await Posts.modifyTitle(newData.modifiedTitle);
            await Dashboard.gotoPostPublished();
            await Posts.confirmLeaveWithoutSave()
            
    
            // Then

            Posts.validateNotTitle(newData.modifiedTitle);
            });

        it('EP09 - hacer Unpublish', async () => {

                const newData = {
                    'modifiedTitle': faker.lorem.word()
                };
        
                // Given
                Login.gotoLogin();  
                cy.wait(2000);
                Login.setLoginEmail();
                cy.wait(2000);
                Login.setLoginPassword();
                cy.wait(2000);
                Login.submitLogin();
                cy.wait(1000);
                await Dashboard.gotoPostPublished();
                await Posts.gotoPost();
                await Posts.modifyTitle(newData.modifiedTitle);
                await Posts.updatePost();
               
        
                // When

                await Posts.gotoUnpublish();
                await Posts.confirmUnpublish();
                await Dashboard.gotoPostPublished();
                


                // Then
        
                Posts.validateNotTitle(newData.modifiedTitle);
                //con esto se valida que el post ya no aparece en published

                });       

        it('EP10 - Borrar post', async () => {

            const newData = {
                'modifiedTitle': faker.lorem.word()
            };
    
            // Given
            Login.gotoLogin();  
            cy.wait(2000);
            Login.setLoginEmail();
            cy.wait(2000);
            Login.setLoginPassword();
            cy.wait(2000);
            Login.submitLogin();
            cy.wait(1000);
            await Dashboard.gotoPostPublished();
            await Posts.gotoPost();
            await Posts.modifyTitle(newData.modifiedTitle);
            await Posts.updatePost();
           
    
            // When

            await Posts.openSettings();
            await Posts.deletePost();
            await Posts.confirmDeletePost();
        
            // Then

            Posts.validateNotTitle(newData.modifiedTitle);
            //con esto se valida que el post ya no aparece en published
            }); 

});
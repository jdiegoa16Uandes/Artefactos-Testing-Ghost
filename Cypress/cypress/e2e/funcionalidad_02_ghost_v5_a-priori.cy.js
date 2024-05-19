
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import { beforeEach } from 'mocha';
import Posts from './PageObjects/Posts';

describe('template spec', () => {
    let testData
    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.wait(10000);
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });
    before(() => {
        cy.readFile('Data/DATA_EDIT_POST.json').then((data) => {
          testData = data;
        });
      });

    it('EP06 - Modificar titulo post existente', async () => {

        const randomIndex = Math.floor(Math.random() * 1000);
        const edit_post_data = testData[randomIndex]
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

        await Posts.modifyTitle(edit_post_data.title);
        cy.wait(2000);
        await cy.screenshot('G5/EP6_5_modifiedTitle', { 'overwrite': true });
        await Posts.updatePost();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_6_postUpdated', { 'overwrite': true });
        await Dashboard.gotoPostPublished();
        cy.wait(2000);
        await cy.screenshot('G5/EP6_7_postsUpdated', { 'overwrite': true });

        

        // Then

        Posts.validatePost(edit_post_data.title);
        });

    it('EP07 - Modificar texto post existente', async () => {

        const randomIndex = Math.floor(Math.random() * 1000);
        const edit_post_data = testData[randomIndex]
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

        await Posts.modifyText(edit_post_data.content)
        cy.wait(2000);
        await cy.screenshot('G5/EP7_5_modifiedText', { 'overwrite': true });
        await Posts.updatePost();
        cy.wait(2000);
        await cy.screenshot('G5/EP7_6_postUpdated', { 'overwrite': true });
        
        

        // Then
        Posts.validatePostContent2(edit_post_data.content)
    });
        
    it('EP08 - Modificar titulo post existente y salir sin guardar cambios', async () => {

        const randomIndex = Math.floor(Math.random() * 1000);
        const edit_post_data = testData[randomIndex]
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

        await Posts.modifyTitle(edit_post_data.title);
        cy.wait(2000);
        await cy.screenshot('G5/EP8_5_modifiedTitle', { 'overwrite': true });
        await Dashboard.gotoPostPublished();
        cy.wait(2000);
        await cy.screenshot('G5/EP8_6_confirmationWindow', { 'overwrite': true });
        await Posts.confirmLeaveWithoutSave()
        

        // Then

        Posts.validateNotTitle(edit_post_data.title);
        });

it('EP09 - hacer Unpublish', async () => {

        const randomIndex = Math.floor(Math.random() * 1000);
        const edit_post_data = testData[randomIndex]
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
        await Posts.modifyTitle(edit_post_data.title);
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

        Posts.validateNotTitle(edit_post_data.title);
        //con esto se valida que el post ya no aparece en published

        });       

    it('EP10 - Borrar post', async () => {

        const randomIndex = Math.floor(Math.random() * 1000);
        const edit_post_data = testData[randomIndex]
        
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
        await Posts.modifyTitle(edit_post_data.title);
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

        Posts.validateNotTitle(edit_post_data.title);
        // con esto se valida que el post ya no aparece en published
        }); 

});
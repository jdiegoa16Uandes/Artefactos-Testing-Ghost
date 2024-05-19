
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import { beforeEach } from 'mocha';
import Posts from './PageObjects/Posts';

describe('template spec',{ testIsolation: true }, () => {
    let testData
    beforeEach( () => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.wait(5000);
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });

    before(() => {
        cy.request('https://my.api.mockaroo.com/data_edit_post.json?key=5c0c08d0').then(data => {
          expect(data.status).to.eq(200);
          testData = data.body;
        });    
      });

    

      it('EP09 - hacer Unpublish', async () => {
          // Given
          Login.gotoLogin(); 
          cy.wait(2000); 
          Login.setLoginEmail();
          cy.wait(2000);
          Login.setLoginPassword();
          cy.wait(2000);
          //  await cy.screenshot('G5/EP9_1_login', { 'overwrite': true });
          Login.submitLogin();
          cy.wait(2000);
          // await cy.screenshot('G5/EP9_2_dashboard', { 'overwrite': true });
          await Dashboard.gotoPostPublished();
          cy.wait(2000);
          //  await cy.screenshot('G5/EP9_3_postsPublished', { 'overwrite': true });
          await Posts.gotoPost();
          cy.wait(2000);
          //  await cy.screenshot('G5/EP9_4_postSelected', { 'overwrite': true });
          await Posts.modifyTitle(testData.title);
          cy.wait(2000);
          //  await cy.screenshot('G5/EP9_5_modifiedTitle', { 'overwrite': true });
          await Posts.updatePost();
          cy.wait(2000);
          // await cy.screenshot('G5/EP9_6_postUpdated', { 'overwrite': true });

          // When
          await Posts.gotoUnpublish();
          cy.wait(2000);
          // await cy.screenshot('G5/EP9_7_confirmUnpublish', { 'overwrite': true });
          await Posts.confirmUnpublish();
          cy.wait(2000);
          //await cy.screenshot('G5/EP9_8_postUnpublished', { 'overwrite': true });
          await Dashboard.gotoPostPublished();
          


          // Then
  
          Posts.validateNotTitle(testData.title);
          //con esto se valida que el post ya no aparece en published

          });       

        
});
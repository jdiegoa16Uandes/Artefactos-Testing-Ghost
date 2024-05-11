import { faker } from "@faker-js/faker";
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import PostsPageObject from "./PageObjects/Posts";
import { beforeEach } from 'mocha';

describe('template spec', () => {

  beforeEach(async () => {
    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });

  it('EP01 - Crear y publicar post', async () => {
  
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.paragraphs()
    };
    cy.viewport(1920, 1080);
    // Given
    Login.gotoLogin(3); 
    Login.setLoginEmail();
    Login.setLoginPassword();
    await cy.screenshot('G3/EP1_1_login', { 'overwrite': true });
    Login.submitLogin(3);
    await cy.screenshot('G3/EP1_2_dashboard', { 'overwrite': true });
    await Dashboard.gotoPosts(3);
    await cy.screenshot('G3/EP1_3_posts', { 'overwrite': true });
    await PostsPageObject.gotoCreatePost();
    await cy.screenshot('G3/EP1_4_postsCreate', { 'overwrite': true });
    // When
    await PostsPageObject.setPostTitle(post.title,3);
    await PostsPageObject.setPostContent(post.content, 3);
    await cy.screenshot('G3/EP1_5_postsData', { 'overwrite': true });
    await PostsPageObject.gotoPublish(3);
    await PostsPageObject.gotoConfirmPublish(3);
    await Dashboard.home(3);
    await Dashboard.gotoPostPublished();
    await cy.screenshot('G3/EP1_6_postsPublished', { 'overwrite': true });

    // Then
    PostsPageObject.validatePost(post.title);

  });

    it('EP04 Crear y publicar post sin titulo', async () => {
  
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.paragraphs()
    };
    cy.viewport(1920, 1080);
    // Given
    Login.gotoLogin(3); 
    Login.setLoginEmail();
    Login.setLoginPassword();
    await cy.screenshot('G3/EP4_1_login', { 'overwrite': true });
    Login.submitLogin(3);
    await cy.screenshot('G3/EP4_2_dashbboard', { 'overwrite': true });
    await Dashboard.gotoPosts(3);
    await cy.screenshot('G3/EP4_3_posts', { 'overwrite': true });
    await PostsPageObject.gotoCreatePost();
    await cy.screenshot('G3/EP4_4_postsCreate', { 'overwrite': true });
    // When
    await PostsPageObject.setPostContent(post.content, 3);
    await cy.screenshot('G3/EP4_5_postsData', { 'overwrite': true });
    await PostsPageObject.gotoPublish(3);
    await PostsPageObject.gotoConfirmPublish(3);
    await Dashboard.home(3);
    await Dashboard.gotoPostPublished();
    await cy.screenshot('G3/EP4_6_postsPublished', { 'overwrite': true });


    // Then
    PostsPageObject.validatePost("(Untitled)");

  });

})



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
    }
    cy.viewport(1920, 1080);
    // Given
    Login.gotoLogin(); 
    Login.setLoginEmail();
    await Login.setLoginPassword();
    await cy.screenshot('G5/EP1_1_login', { 'overwrite': true });
    Login.submitLogin();
    await cy.screenshot('G5/EP1_2_dashboard', { 'overwrite': true });
    await Dashboard.gotoPosts();
    await cy.screenshot('G5/EP1_3_posts', { 'overwrite': true });
    await PostsPageObject.gotoCreatePost();
    await cy.screenshot('G5/EP1_4_postsCreate', { 'overwrite': true });
    // When
    await PostsPageObject.setPostTitle(post.title);
    await PostsPageObject.setPostContent(post.content);
    await cy.screenshot('G5/EP1_5_postsData', { 'overwrite': true });
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();
    await cy.screenshot('G5/EP1_6_postsPublished', { 'overwrite': true });

    // Then
    PostsPageObject.validatePost(post.title);

  });
  it('EP02- Crear y publicar post con contenido markdown', async () => {
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.sentence(),
    };
    cy.viewport(1920, 1080);
    // Given
    await Login.gotoLogin();  
    await Login.setLoginEmail();
    await Login.setLoginPassword();
    await cy.screenshot('G5/EP2_1_login', { 'overwrite': true });
    Login.submitLogin();
    await cy.screenshot('G5/EP2_2_dashbboard', { 'overwrite': true });
    await Dashboard.gotoPosts();
    await cy.screenshot('G5/EP2_3_posts', { 'overwrite': true });

    await PostsPageObject.gotoCreatePost();
    await cy.screenshot('G5/EP2_4_postsCreate', { 'overwrite': true });

    // When
    await PostsPageObject.setPostTitle(post.title);
    await PostsPageObject.selectType("1");
    await PostsPageObject.setPostContentEspecial(post.content);
    await cy.screenshot('G5/EP2_5_postsData', { 'overwrite': true });
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();
    await cy.screenshot('G5/EP2_6_postsPublished', { 'overwrite': true });
    await Dashboard.gotoFirstPostPublished(post.title);

    // Then
    PostsPageObject.validatePostContent(post.content);

  });

    it('EP03- Crear y publicar post con contenido html', async () => {
      const post={
        'title': faker.lorem.word(),
        'content': faker.lorem.word(),
      };
      cy.viewport(1920, 1080);
      // Given
      await Login.gotoLogin();  
      await Login.setLoginEmail();
      await Login.setLoginPassword();
      await cy.screenshot('G5/EP3_1_login', { 'overwrite': true });
      Login.submitLogin();
      await cy.screenshot('G5/EP3_2_dashbboard', { 'overwrite': true });
      await Dashboard.gotoPosts();
      await cy.screenshot('G5/EP3_3_posts', { 'overwrite': true });
      await PostsPageObject.gotoCreatePost();
      await cy.screenshot('G5/EP3_4_postsCreate', { 'overwrite': true });

      // When
      await PostsPageObject.setPostTitle(post.title);
      await PostsPageObject.selectType(2);
      await PostsPageObject.setPostContentEspecial(`<h5>${post.content}</h5>`);
      await cy.screenshot('G5/EP3_5_postsData', { 'overwrite': true });
      await PostsPageObject.gotoPublish();
      await PostsPageObject.gotoContinuePublish();
      await PostsPageObject.gotoConfirmPublish();
      await Dashboard.home();
      await Dashboard.gotoPostPublished();
      await cy.screenshot('G5/EP3_6_postsPublished', { 'overwrite': true });
      await Dashboard.gotoFirstPostPublished(post.title);

      // Then
      PostsPageObject.validatePostContentHTML(post.content);

    });
    it('EP04 Crear y publicar post sin titulo', async () => {
  
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.paragraphs()
    };
    cy.viewport(1920, 1080);
    // Given
    await Login.gotoLogin(); 
    await Login.setLoginEmail();
    await Login.setLoginPassword();
    await cy.screenshot('G5/EP4_1_login', { 'overwrite': true });
    Login.submitLogin();
    await cy.screenshot('G5/EP4_2_dashbboard', { 'overwrite': true });
    await Dashboard.gotoPosts();
    await cy.screenshot('G5/EP4_3_posts', { 'overwrite': true });
    await PostsPageObject.gotoCreatePost();
    await cy.screenshot('G5/EP4_4_postsCreate', { 'overwrite': true });
    // When
    await PostsPageObject.setPostContent(post.content);
    await cy.screenshot('G5/EP4_5_postsData', { 'overwrite': true });
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();
    await cy.screenshot('G5/EP4_6_postsPublished', { 'overwrite': true });


    // Then
    PostsPageObject.validatePost("(Untitled)");

  });
  it('EP05 Crear y publicar post con imagen', async () => {
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.paragraphs()
    };
    cy.viewport(1920, 1080);
    // Given
    await Login.gotoLogin(); 
    await Login.setLoginEmail();
    await  Login.setLoginPassword();
    await cy.screenshot('G5/EP5_1_login', { 'overwrite': true });
    await Login.submitLogin();
    await cy.screenshot('G5/EP5_2_dashbboard', { 'overwrite': true });
    await Dashboard.gotoPosts();
    await cy.screenshot('G5/EP5_3_posts', { 'overwrite': true });
    await PostsPageObject.gotoCreatePost();
    await cy.screenshot('G5/EP5_4_postsCreate', { 'overwrite': true });

    // When
    await PostsPageObject.setPostTitle(post.title);
    await PostsPageObject.gotoImage();
    await PostsPageObject.setImage("cat");
    await PostsPageObject.selectImage();
    await cy.screenshot('G5/EP5_5_postsData', { 'overwrite': true });
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();
    await cy.screenshot('G5/EP5_6_postsPublished', { 'overwrite': true });
    await Dashboard.gotoFirstPostPublished(post.title);

    // // Then
    PostsPageObject.validateImage();

  });


})



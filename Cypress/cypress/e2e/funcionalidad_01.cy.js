import { faker } from "@faker-js/faker";
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import PostsPageObject from "./PageObjects/Posts";

describe('template spec', () => {

  before(async () => {
    // Given
    await Login.gotoLogin();  
    await Login.setLoginEmail();
    await Login.setLoginPassword();
    await Login.submitLogin();
});

  it('EP01 - Crear y publicar post', async () => {
    cy.on('uncaught:exception', (err, runnable) => { return false });
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.paragraphs()
    }
    // Given
    await Dashboard.gotoPosts();
    await PostsPageObject.gotoCreatePost();
    // When
    await PostsPageObject.setPostTitle(post.title);
    await PostsPageObject.setPostContent(post.content);
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();

    // Then
    PostsPageObject.validatePost(post.title);

  });

  // it('EP02 - Crear y publicar post', async () => {
  //   cy.on('uncaught:exception', (err, runnable) => { return false });
  //   const post={
  //     'title': faker.lorem.word(),
  //     'content': faker.lorem.paragraphs()
  //   }
  //   // Given
  //   await Dashboard.gotoPosts();
  //   await PostsPageObject.gotoCreatePost();
  //   // When
  //   await PostsPageObject.setPostTitle(post.title);
  //   await PostsPageObject.setPostContent(post.content);
  //   await PostsPageObject.gotoPublish();
  //   await PostsPageObject.gotoContinuePublish();
  //   await PostsPageObject.gotoConfirmPublish();
  //   await Dashboard.home();
  //   await Dashboard.gotoPostPublished();

  //   // Then
  //   PostsPageObject.validatePost(post.title);

  // });


  /*it('should login successfully', () => {
    LoginPage.visitLoginPage();
    LoginPage.fillEmail('your-email@example.com');
    LoginPage.fillPassword('your-password');
    LoginPage.submitLoginForm();
    // Add assertions for successful login
  });*/


})
import { faker } from "@faker-js/faker";
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import PostsPageObject from "./PageObjects/Posts";
import { beforeEach } from 'mocha';

describe('template spec', () => {

  beforeEach(async () => {
    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });

  // it('EP01 - Crear y publicar post', async () => {
  
  //   const post={
  //     'title': faker.lorem.word(),
  //     'content': faker.lorem.paragraphs()
  //   }
  //   // Given
  //   Login.gotoLogin();  
  //   Login.setLoginEmail();
  //   Login.setLoginPassword();
  //   Login.submitLogin();
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
  it('EP02- Crear y publicar post con contenido markdown', async () => {
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.paragraphs()
    }
    // Given
    Login.gotoLogin();  
    Login.setLoginEmail();
    Login.setLoginPassword();
    Login.submitLogin();
    await Dashboard.gotoPosts();
    await PostsPageObject.gotoCreatePost();
    // When
    await PostsPageObject.setPostTitle(post.title);
    await PostsPageObject.selectType();
    await PostsPageObject.setPostContentEspecial(post.content);
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();
    await Dashboard.gotoFirstPostPublished(post.title);

    // Then
    PostsPageObject.validatePostContent(post.content);

  });
 


})
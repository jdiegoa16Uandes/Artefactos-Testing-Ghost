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
    // Given
    Login.gotoLogin(); 
    Login.setLoginEmail();
    Login.setLoginPassword();
    Login.submitLogin();
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
  it('EP02- Crear y publicar post con contenido markdown', async () => {
    const post={
      'title': faker.lorem.word(),
      'content': faker.lorem.sentence(),
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
    await PostsPageObject.selectType("1");
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

    it('EP03- Crear y publicar post con contenido html', async () => {
      const post={
        'title': faker.lorem.word(),
        'content': faker.lorem.word(),
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
      await PostsPageObject.selectType(2);
      await PostsPageObject.setPostContentEspecial(`<h5>${post.content}</h5>`);
      await PostsPageObject.gotoPublish();
      await PostsPageObject.gotoContinuePublish();
      await PostsPageObject.gotoConfirmPublish();
      await Dashboard.home();
      await Dashboard.gotoPostPublished();
      await Dashboard.gotoFirstPostPublished(post.title);

      // Then
      PostsPageObject.validatePostContentHTML(post.content);

    });
    it('EP04 Crear y publicar post sin titulo', async () => {
  
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
    await PostsPageObject.setPostContent(post.content);
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();

    // Then
    PostsPageObject.validatePost("(Untitled)");

  });
  it('EP05 Crear y publicar post con imagen', async () => {
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
    await PostsPageObject.gotoImage();
    await PostsPageObject.setImage("cat");
    await PostsPageObject.selectImage();
    await PostsPageObject.gotoPublish();
    await PostsPageObject.gotoContinuePublish();
    await PostsPageObject.gotoConfirmPublish();
    await Dashboard.home();
    await Dashboard.gotoPostPublished();
    await Dashboard.gotoFirstPostPublished(post.title);

    // // Then
    PostsPageObject.validateImage();

  });


})



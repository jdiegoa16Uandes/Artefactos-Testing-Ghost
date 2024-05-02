import { faker } from "@faker-js/faker";
import LoginPageObject from "./PageObjects/Login";
import DashboardPageObject from "./PageObjects/Dashboard";
import PostsPageObject from "./PageObjects/Posts";

describe('template spec', () => {
  beforeEach(async () => {
    await LoginPageObject.login();

  })

  it('EP01 - Crear un post solo con el titulo y cuerpo vacios', async () => {
    // Given
    await DashboardPageObject.home();
    await DashboardPageObject.gotoPosts();
    await PostsPageObject.gotoCreatePost();

    // When
    await PostsPageObject.setPostTitle(faker.lorem.sentence());

    // Then
    // Assert -  post creado con exito
  })

  it('EP02 - Crear un post solo con el titulo y cuerpo lleno', async () => {
    // Given
    await DashboardPageObject.home();
    await DashboardPageObject.gotoPosts();
    await PostsPageObject.gotoCreatePost();

    // When
    await PostsPageObject.setPostTitle(faker.lorem.sentence());
    await PostsPageObject.setPostContent(faker.lorem.paragraphs());

    // Then
    // Assert -  post creado con exito
  })

  /*it('should login successfully', () => {
    LoginPage.visitLoginPage();
    LoginPage.fillEmail('your-email@example.com');
    LoginPage.fillPassword('your-password');
    LoginPage.submitLoginForm();
    // Add assertions for successful login
  });*/


})
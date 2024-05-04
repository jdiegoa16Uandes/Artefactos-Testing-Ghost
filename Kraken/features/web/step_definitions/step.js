const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPageObject = require('../support/PageObjects/Login.js');

Given('I enter email {kraken-string}', async function (email) {
    const Login = new LoginPageObject(this.driver);
    await Login.setLoginEmail(email);
});

Given('I enter password {kraken-string}', async function (password) {
    const Login = new LoginPageObject(this.driver);
    await Login.setLoginPassword(password);
});

Given('I click login button', async function() {
    const Login = new LoginPageObject(this.driver);
    await Login.submitLogin();
})

Given('I click on posts', async function () {

    let element = await this.driver.$(`a[data-test-nav="posts"]`);
    return await element.click();
});

When('I click on the new post', async function () {

    let element = await this.driver.$(`a[data-test-new-post-button]`);
    return await element.click();
});

When('I enter title {kraken-string}', async function (title) {
    let element = await this.driver.$('textarea[data-test-editor-title-input]');
    return await element.setValue(title);
});

When('I go to content', async function () {
    let element = await this.driver.$('p[data-koenig-dnd-droppable]');
    return await element.click();
});

When('I enter content {kraken-string}', async function (content) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable]');
    return await element.setValue(content);
});

When('I click on button publish', async function () {

    let element = await this.driver.$(`button[data-test-button="publish-flow"]`);
    return await element.click();
});

When('I click on asset publish', async function () {

    let element = await this.driver.$(`button[data-test-button="continue"]`);
    return await element.click();
});

When('I click on button publish post', async function () {

    let element = await this.driver.$(`button[data-test-button="confirm-publish"]`);
    return await element.click();
});

Then('I verify the post was created with {kraken-string}', async function (title) { 

    // buscar por h3
    let elements = await this.driver.$$(`h3`);
    let response = await elements[0].getText(); 
    assert.strictEqual(response,title);
}); 



// EP19 - Crear una página con el titulo y contenido de manera correcta
Given('I click on pages', async function () {

    let element = await this.driver.$(`a[data-test-nav="pages"]`);
    return await element.click();
});

When('I click on the new page', async function () {

    let element = await this.driver.$(`a[data-test-new-page-button]`);
    return await element.click();
});

Then('I verify the page was created with {kraken-string}', async function (title) { 
    let elements = await this.driver.$$(`h3`);
    let response = await elements[0].getText(); 
    assert.strictEqual(response,title);
}); 
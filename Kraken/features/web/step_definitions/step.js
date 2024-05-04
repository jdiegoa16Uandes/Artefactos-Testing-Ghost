const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');



Given('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

Given('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

Given('I click next', async function() {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
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
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPageObject = require('../support/PageObjects/Login.js');
const DashboardPageObject = require('../support/PageObjects/Dashboard.js');
const PagesPageObject = require('../support/PageObjects/Pages.js');
const MembersPageObject = require('../support/PageObjects/Members.js');
const PostPageObject = require('../support/PageObjects/Post.js')

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
    const Post = new PostPageObject(this.driver);
    await Post.gotoPost();
});

When('I click on the new post', async function () {
    const Post = new PostPageObject(this.driver);
    await Post.gotoNewPost();
});

When('I enter title {kraken-string}', async function (title) {
    const Post = new PostPageObject(this.driver);
    await Post.setTitle(title);
});

When('I go to image', async function () {
    const Post = new PostPageObject(this.driver);
    await Post.gotoImage();
});
When('I search image of {string}', async function (search) {
    const Post = new PostPageObject(this.driver);
    await Post.setImage(search);
});
When('I select image', async function () {
    const Post = new PostPageObject(this.driver);
    await Post.selectImage();
});


When('I go to content', async function () {
    let element = await this.driver.$('p[data-koenig-dnd-droppable]');
    return await element.click();
});
When('I click on plus button', async function () {
    let element = await this.driver.$('div[data-kg-plus-button]');
    return await element.click();
});
When('I select type markdown', async function () {
    const Post = new PostPageObject(this.driver);
    await Post.selectType(1);
});
When('I select type HTML', async function () {
    const Post = new PostPageObject(this.driver);
    await Post.selectType(2);
});

When('I enter special content {kraken-string}', async function (content) {
    const Post = new PostPageObject(this.driver);
    await Post.setContentMD(content);
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

Then('I go to the post published with {kraken-string}', async function (title) { 
    const Dashboard = new DashboardPageObject(this.driver);
    await Dashboard.gotoFirstPostPublished(title);
}); 

Then('I verify the content with {kraken-string}', async function (content) { 
    const Post = new PostPageObject(this.driver);
    await Post.validatePostContent(content);
}); 
Then('I verify the content HTML with {kraken-string}', async function (content) { 
    const Post = new PostPageObject(this.driver);
    await Post.validatePostContentH(content);
}); 
Then('I verify the image', async function () { 
    const Post = new PostPageObject(this.driver);
    await Post.validateImage();
}); 

// EP19 - Crear una página con el titulo y contenido de manera correcta
Given('I click on pages', async function () {
    const Dashboard = new DashboardPageObject(this.driver);
    await Dashboard.gotoPages();
});

When('I click on the new page', async function () {
    const Pages = new PagesPageObject(this.driver);
    await Pages.gotoCreatePage();
});

Then('I verify the page was created with {kraken-string}', async function (title) { 
    const Pages = new PagesPageObject(this.driver);
    await Pages.validatePage(title);
}); 

Given('I edit the page {kraken-string}', async function (title) {
    const Pages = new PagesPageObject(this.driver);
    await Pages.gotoEditPage(title);
});

Given('I open the settings menu', async function () {
    const Pages = new PagesPageObject(this.driver);
    await Pages.openSettings();
});

Given('I click the delete button', async function () {
    const Pages = new PagesPageObject(this.driver);
    await Pages.deletePage();
});

Given('I click the confirm delete button', async function () {
    const Pages = new PagesPageObject(this.driver);
    await Pages.confirmDeletePage();
});

Then('I validate the page {kraken-string} is not on the list', async function (title) {
    const Pages = new PagesPageObject(this.driver);
    await Pages.validatePage(title, false);
});

Given('I click on members', async function () {
    const Dashboard = new DashboardPageObject(this.driver);
    await Dashboard.gotoMembers();
});

When('I click on the new member', async function () {
    const Members = new MembersPageObject(this.driver);
    await Members.gotoCreateMember();
});

When('I enter the name of the member {kraken-string}', async function (value) {
    const Members = new MembersPageObject(this.driver);
    await Members.setMemberName(value);
});

When('I enter the email of the member {kraken-string}', async function (value) {
    const Members = new MembersPageObject(this.driver);
    await Members.setMemberEmail(value);
});

When('I enter label {kraken-string}', async function (value) {
    const Members = new MembersPageObject(this.driver);
    await Members.setMemberLabel(value);
});

When('I enter note {kraken-string}', async function (value) {
    const Members = new MembersPageObject(this.driver);
    await Members.setMemberNote(value);
});

When('I save new member', async function () {
    const Members = new MembersPageObject(this.driver);
    await Members.saveMember();
});

Then('I verify the member was created with {kraken-string}', async function (title) { 
    const Members = new MembersPageObject(this.driver);
    await Members.validateMember(title);
}); 

Then('I verify that the duplicate email message is shown', async function () { 
    const Members = new MembersPageObject(this.driver);
    await Members.validateDuplicatedEmail();
}); 

Then('I verify that the missing email message is shown', async function () { 
    const Members = new MembersPageObject(this.driver);
    await Members.validateEmptyEmail();
}); 
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPageObject = require('../support/PageObjects/Login.js');
const DashboardPageObject = require('../support/PageObjects/Dashboard.js');
const PagesPageObject = require('../support/PageObjects/Pages.js');
const MembersPageObject = require('../support/PageObjects/Members.js');
const TagsPageObject = require('../support/PageObjects/Tags.js');

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


// EP11 al EP15
When( "I click on tags", async function() {
    const tag = new TagsPageObject(this.driver);
    await tag.gotoTagsPage();
});

When( "I click on new tag", async function() {
    const tag = new TagsPageObject(this.driver);
    await tag.gotoNewtagPage();
});


When( "I enter tag name {kraken-string}", async function(tagName) {
    const tag = new TagsPageObject(this.driver);
    await tag.setTagName(tagName);
});

When( "I enter tag description {kraken-string}", async function(tagDescription) {
    const tag = new TagsPageObject(this.driver);
    await tag.setTagDescription(tagDescription);
});

When ("I enter a color", async function() {
    const tag = new TagsPageObject(this.driver);
    await tag.setColor();
});


When ("I save the tag", async function() {
    const tag = new TagsPageObject(this.driver);
    await tag.saveTag();
});

When ("I validate the tag {kraken-string}", async function(tagName) {   
    const tag = new TagsPageObject(this.driver);
    await tag.validateTag(tagName);
});

When ("I edit a tag", async function() {
    const tag = new TagsPageObject(this.driver);
    await tag.editarTag();
});

When ("I verify the restriction", async function() {    
    const tag = new TagsPageObject(this.driver);
    await tag.validateError();
});

When ("I delete a tag", async function() {
    const tag = new TagsPageObject(this.driver);
    await tag.deleteTag();
});

When ("I create tag intern", async function() {
    const tag = new TagsPageObject(this.driver);
    await tag.createTagIntern();

});
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const axios = require('axios'); 
const LoginPageObject = require('../support/PageObjects/Login.js');
const DashboardPageObject = require('../support/PageObjects/Dashboard.js');
const PagesPageObject = require('../support/PageObjects/Pages.js');
const MembersPageObject = require('../support/PageObjects/Members.js');
const TagsPageObject = require('../support/PageObjects/Tags.js');
const PostPageObject = require('../support/PageObjects/Post.js');

var fs = require('fs');

let page_data = [];
axios.get("https://my.api.mockaroo.com/PAGE.json?key=98fb9f30").then(
    response => { page_data = response.data }).catch(error => { console.error('ERROR: mockaroo PAGE', error);
});

Given('I take a screenshot in {string} with the name as {string}', async function(dir, name) {
    dir = 'screenshots/' + dir;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    let encodedString = await this.driver.takeScreenshot();
    fs.writeFileSync(`${dir}/${name}.png`, encodedString, 'base64');
});

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
    if (title == 'PSEUDO_PAGE') {
        title = page_data.title;
    }
    const Post = new PostPageObject(this.driver);
    await Post.setTitle(title);
});

//R

When('I click on posts published', async function () {
    const Dashboard = new DashboardPageObject(this.driver);
    await Dashboard.gotoPublished();
});


When('I click on a specific post', async function (){
    const Post = new PostPageObject(this.driver);
    await Post.gotoSpecificPost();
 });

 When('I modify a title {kraken-string}', async function (title) {
    const Post = new PostPageObject(this.driver);
    await Post.modifyTitle(title);
});

When('I click on button update', async function () {
    let element = await this.driver.$(`button[data-test-button="publish-save"]`);
    return await element.click();
});

When('I click on button unpublish', async function () {
    let element = await this.driver.$(`button[data-test-button="update-flow"]`);
    return await element.click();
});

When('I click on button options', async function () {
    let element = await this.driver.$(`button.settings-menu-toggle`);
    return await element.click();
});

When('I confirm unpublish', async function () {
    let element = await this.driver.$(`button[data-test-button="revert-to-draft"]`);
    return await element.click();
});


When('I modify a text {kraken-string}', async function (content) {
    const Post = new PostPageObject(this.driver);
    await Post.setText(content);
});

Then('I verify the text was modified with {kraken-string}', async function (content) {
    let elements = await this.driver.$$('div.kg-prose');
    if (elements.length === 1) {
        let text = await elements[0].getText();
        assert.strictEqual(text, content);
    } else if (elements.length > 1) {
        let text = await elements[1].getText();
        assert.strictEqual(text, content);
    }
});

When('I click on button posts', async function () {
    let element = await this.driver.$(`a[data-test-link="posts"]`);
    return await element.click();
});

Then('I verify the title was modified with {kraken-string}', async function (title) { 
    let elements = await this.driver.$$(`h3`);
    let response = await elements[0].getText(); 
    assert.strictEqual(response,title);
}); 

When('I click on button delete post', async function () {
    let element = await this.driver.$(`div.settings-menu-delete-button`);
    return await element.click();
});

When('I click on button delete confirm', async function () {
    let elements = await this.driver.$$('span[data-test-task-button-state="idle"]');
    for (let element of elements) {
        let text = await element.getText();
        if (text.includes("Delete")) {
            await element.click();
            break; 
        }
    }
});

When('I click on button leave', async function () {
    let element = await this.driver.$('div.modal-footer button.gh-btn.gh-btn-red');
    await element.click();
});

Then('I verify title is not modified with {kraken-string}', async function (title) { 
    let elements = await this.driver.$$(`h3`);
    let response = await elements[0].getText(); 
    assert.notStrictEqual(response,title);
}); 

Then('I verify title is not in published with title {kraken-string}', async function (title) { 
    let elements = await this.driver.$$(`h3`);
    let response = await elements[0].getText(); 
    assert.notStrictEqual(response,title);
}); 

//RH

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
    if (content == 'PSEUDO_PAGE') {
        content = page_data.content;
    }
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
    if (title == 'PSEUDO_PAGE') {
        title = page_data.title;
    }

    const Pages = new PagesPageObject(this.driver);
    await Pages.validatePage(title);
}); 

Given('I edit the page {kraken-string}', async function (title) {
    if (title == 'PSEUDO_PAGE') {
        title = page_data.title;
    }

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
    if (title == 'PSEUDO_PAGE') {
        title = page_data.title;
    }

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


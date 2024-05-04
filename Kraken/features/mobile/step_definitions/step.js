const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I click login button', async function() {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
})
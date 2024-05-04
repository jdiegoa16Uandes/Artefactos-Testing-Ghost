const assert = require('assert');

class PagesPageObject {

    constructor(driver) {
        this.driver = driver;
    }

    async gotoCreatePage() {
        let element = await this.driver.$(`a[data-test-new-page-button]`);
        return await element.click();
    }

    async gotoEditPage(title) {
        let elements = await this.driver.$$(`a > h3`);
        for (let element of elements) {
            let response = await element.getText();
            if(response == title) {
                return await element.click();
            }
        }

        assert.fail(`Page with title ${title} not found`);
    }

    async openSettings() {
        let element = await this.driver.$(`button.settings-menu-toggle`);
        return await element.click();
    }

    async deletePage() {
        let element = await this.driver.$(`div.settings-menu-delete-button`).$('button');
        return await element.click();
    }

    async confirmDeletePage() {
        let elements = await this.driver.$$(`button > span[data-test-task-button-state]`);
        for (let element of elements) {
            let response = await element.getText();
            if(response == 'Delete') {
                return await element.click();
            }
        }
    }

    async validatePage(value, exist = true) {
        let elements = await this.driver.$$(`h3`);
        let response = await elements[0].getText();
        if(exist) {
            assert.strictEqual(response, value);
        } else {
            assert.notStrictEqual(response, value);
        }
    }
}

module.exports = PagesPageObject;
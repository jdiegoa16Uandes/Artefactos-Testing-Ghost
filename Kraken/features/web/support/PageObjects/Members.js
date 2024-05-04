const assert = require('assert');

class PagesPageObject {

    constructor(driver) {
        this.driver = driver;
    }

    async gotoCreateMember() {
        let element = await this.driver.$(`a[data-test-new-member-button]`);
        return await element.click();
    }

    async setMemberName(value) {
        let element = await this.driver.$('input[data-test-input="member-name"]');
        return await element.setValue(value);
    }

    async setMemberEmail(value) {
        let element = await this.driver.$('input[data-test-input="member-email"]');
        return await element.setValue(value);
    }

    async setMemberLabel(value) {
        let element = await this.driver.$('input.ember-power-select-trigger-multiple-input');
        return await element.setValue(value);
    }

    async setMemberNote(value) {
        let element = await this.driver.$('textarea[data-test-input="member-note"]');
        return await element.setValue(value);
    }

    async saveMember() {
        let element = await this.driver.$('button[data-test-button="save"]');
        return await element.click();
    }

    async validateMember(value) {
        let elements = await this.driver.$$('p.gh-members-list-email');
        for (let element of elements) {
            let response = await element.getText();
            if(response == value) {
                return await element.click();
            }
        }
    }

    async validateDuplicatedEmail() {
        let elements = await this.driver.$$(`p.response`);
        for (let element of elements) {
            let response = await element.getText();
            if(response.includes('Member already exists')) {
                return assert.match(response, /Member already exists/);
            }
        }

        assert.fail(`Duplicate email message not found`);
    }

    async validateEmptyEmail() {
        let elements = await this.driver.$$(`p.response`);
        for (let element of elements) {
            let response = await element.getText();
            if(response.includes('Please enter an email')) {
                return assert.match(response, /Please enter an email/);
            }
        }

        assert.fail(`Missing email message not found`);
    }
}

module.exports = PagesPageObject;
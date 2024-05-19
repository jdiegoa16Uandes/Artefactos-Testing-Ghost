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

    async validateInvalidEmail() {
        let elements = await this.driver.$$(`p.response`);
        for (let element of elements) {
            let response = await element.getText();
            if(response.includes('Invalid Email')) {
                return assert.match(response, /Invalid Email/);
            }
        }

        assert.fail(`Invalid email message not found`);
    }

    async validateLongEmail() {
        let elements = await this.driver.$$(`p.response`);
        for (let element of elements) {
            let response = await element.getText();
            if(response.includes('Email cannot be longer than 191 characters')) {
                return assert.match(response, /Email cannot be longer than 191 characters/);
            }
        }

        assert.fail(`Email too long message not found`);
    }

    async validateLongName() {
        let elements = await this.driver.$$(`p.response`);
        for (let element of elements) {
            let response = await element.getText();
            if(response.includes('Name cannot be longer than 191 characters')) {
                return assert.match(response, /Name cannot be longer than 191 characters/);
            }
        }

        assert.fail(`Name too long message not found`);
    }

    async validateLongNote() {
        let elements = await this.driver.$$(`p.response`);
        for (let element of elements) {
            let response = await element.getText();
            if(response.includes('Note is too long')) {
                return assert.match(response, /Note is too long/);
            }
        }

        assert.fail(`Note too long message not found`);
    }
}

module.exports = PagesPageObject;
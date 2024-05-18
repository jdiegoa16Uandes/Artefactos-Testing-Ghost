class MembersPageObject {

    data = require('../../fixtures/admin.json');

    async gotoCreateMember(version = 5) {
        let selector = version == 5 ? 'a[data-test-new-member-button]' : 'button.gh-btn-green';

        await cy.get(selector).then(async (element) => {
            await element.click();
        }).wait(5000);
    }

    async setMemberName(value) {
        await cy.get('input[data-test-input="member-name"]').click().type(value).wait(2000);
    }

    async setMemberEmail(value, version = 5) {
        let selector = version == 5 ? 'input[data-test-input="member-email"]' : 'input[id="new-user-email"]';

        await cy.get(selector).click().type(value).wait(2000);
    }

    async setMemberLabel(value) {
        await cy.get('input.ember-power-select-trigger-multiple-input').click().type(value).wait(2000);
    }

    async setMemberNote(value) {
        await cy.get('textarea[data-test-input="member-note"]').click().type(value).wait(2000);
    }

    async saveMember(version = 5) {
        let selector = version == 5 ? 'button[data-test-button="save"]' : 'div.fullscreen-modal button.gh-btn-green';

        await cy.get(selector).then(async (element) => {
            await element.click();
        }).wait(5000);
    }

    async closeModal() {
        await cy.get('a[title="Close"]').then(async (element) => {
            await element.click();
        }).wait(2000);
    }

    async validateMember(email, version = 5, noname = false) {
        let selector = ''
        if(noname) {
            selector = 'h3.gh-members-name-noname';
        } else {
            selector = version == 5 ? 'p.gh-members-list-email' : 'section.gh-invited-users h3.apps-card-app-title';
        }

        await cy.get(selector).contains(email).should('exist');
    }

    async validateDuplicatedEmail(version = 5) {
        let response = version == 5 ? 'Member already exists' : 'A user with that email address already exists';
        await cy.get('p.response').contains(response).should('exist');
    }

    async validateEmptyEmail() {
        await cy.get('p.response').contains('Please enter an email').should('exist');
    }

    async validateInvalidEmail() {
        await cy.get('p.response').contains('Invalid Email').should('exist');
    }

    async validateLongEmail() {
        await cy.get('p.response').contains('Email cannot be longer than 191 characters').should('exist');
    }

    async validateLongName() {
        await cy.get('p.response').contains('Name cannot be longer than 191 characters').should('exist');
    }
}

export default new MembersPageObject();

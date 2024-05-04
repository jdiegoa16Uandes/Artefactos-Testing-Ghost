class MembersPageObject {

    data = require('../../fixtures/admin.json');

    async gotoCreateMember() {
        await cy.get('a[data-test-new-member-button]').then(async (element) => {
            await element.click();
        });
    }

    async setMemberName(value) {
        await cy.get('input[data-test-input="member-name"]').click().type(value).wait(1000);
    }

    async setMemberEmail(value) {
        await cy.get('input[data-test-input="member-email"]').click().type(value).wait(1000);
    }

    async setMemberLabel(value) {
        await cy.get('input.ember-power-select-trigger-multiple-input').click().type(value).wait(1000);
    }

    async setMemberNote(value) {
        await cy.get('textarea[data-test-input="member-note"]').click().type(value).wait(1000);
    }

    async saveMember() {
        await cy.get('button[data-test-button="save"]').then(async (element) => {
            await element.click();
        });
    }

    validateMember(email) {
        cy.get('p.gh-members-list-email').contains(email).should('exist');
    }
}

export default new MembersPageObject();

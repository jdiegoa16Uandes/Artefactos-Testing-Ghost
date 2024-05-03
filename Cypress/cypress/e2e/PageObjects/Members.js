class MembersPageObject {

    data = require('../../fixtures/admin.json');

    async gotoCreateMember() {
        cy.find('a[data-test-new-member-button]').click();
    }

    async setMemberName(name) {
        cy.get('input[data-test-input="member-name"]').type(name);
    }

    async setMemberEmail(email) {
        cy.get('input[data-test-input="member-email"]').type(email);
    }

    async setMemberLabel(label) {
        cy.get('input#ember-power-select-trigger-multiple-input').type(label);
        cy.get('input#ember-power-select-trigger-multiple-input').type('Cypress.io{enter}');
    }

    async setMemberNote(note) {
        cy.get('textarea[data-test-input="member-note"]').type(note);
    }

    async saveMember() {
        cy.find('button[data-test-button="save"]').click();
    }
}

export default new MembersPageObject();

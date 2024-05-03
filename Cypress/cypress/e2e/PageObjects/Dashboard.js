class DashboardPageObject {

    data = require('../../fixtures/admin.json');

    async home() {
        cy.visit(`${this.data.adminUrl}/#/dashboard`);
    }

    async gotoPosts() {
        this.home();
        cy.find('a[data-test-nav="posts"]').click();
    }

    async gotoMembers() {
        this.home();
        cy.find('a[data-test-nav="members"]').click();
    }
}

export default new DashboardPageObject();

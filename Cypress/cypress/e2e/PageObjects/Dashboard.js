class DashboardPageObject {

    data = require('../../fixtures/admin.json');

    async home() {
        cy.contains('Dashboard').click();
    }

    async gotoPosts() {
        cy.contains('Posts').click();
    }
}

export default new DashboardPageObject();

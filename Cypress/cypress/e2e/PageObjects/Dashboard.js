class DashboardPageObject {

    data = require('../../fixtures/admin.json');

    async home() {
        await cy.visit(`${this.data.adminUrl}/#/dashboard`, { force: true });
    }

    async gotoPosts() {
        await cy.get('a[data-test-nav="posts"]').then(async (element) => {
            await element.click();
        });
    }

    async gotoMembers() {
        await cy.get('a[data-test-nav="members"]').then(async (element) => {
            await element.click();
        }).wait(3000);
    }

    async gotoPages() {
        await cy.get('a[data-test-nav="pages"]').then(async (element) => {
            await element.click();
        }).wait(3000);
    }
}

export default new DashboardPageObject();

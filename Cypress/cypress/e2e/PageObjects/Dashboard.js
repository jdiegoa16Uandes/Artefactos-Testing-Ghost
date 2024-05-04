class DashboardPageObject {

    data = require('../../fixtures/admin.json');

    async home() {
        await cy.visit(`${this.data.adminUrl}/#/dashboard`, { force: true });
        await cy.get('button[data-test-leave-button]').then(async (element) => {
            if(element) {
                await element.click();
            }
        });
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
}

export default new DashboardPageObject();

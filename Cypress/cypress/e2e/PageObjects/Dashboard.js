class DashboardPageObject {

    data = require('../../fixtures/admin.json');

    async home(version = 5) {
        let url = version == 5 ? this.data.adminUrl + '/#/dashboard' : this.data.adminUrlv3 + '/#/site';

        await cy.visit(url, { force: true });
    }

    async gotoPosts(version = 5) {
        let selector = version ==5 ? 'a[data-test-nav="posts"]' : 'a[href="#/posts/"]';
        await cy.get(selector).then(async (element) => {
            await element.click();
        });
    }
    async gotoPostPublished(){
        cy.get('a[href="#/posts/?type=published"]').then((element) => {
            element.click();
        }).wait(2000);
    }
    async gotoFirstPostPublished(title){
        cy.get('h3.gh-content-entry-title').contains(title).then((element) => {
            element.click();
        }).wait(2000);
    }
    async gotoMembers(version = 5) {
        let selector = version == 5 ? 'a[data-test-nav="members"]' : 'a[href="#/staff/"]';

        await cy.get(selector).then(async (element) => {
            await element.click();
        }).wait(2000).reload(true).wait(2000);
    }

    async gotoPages() {
        await cy.get('a[data-test-nav="pages"]').then(async (element) => {
            await element.click();
        }).wait(2000).reload(true).wait(2000);
    }

    
}

export default new DashboardPageObject();

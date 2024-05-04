class PagesPageObject {

    data = require('../../fixtures/admin.json');

    async gotoCreatePage() {
        await cy.get('a[data-test-new-page-button]').then(async (element) => {
            await element.click();
        });
    }
    async gotoEditPage(title) {
        await cy.get('h3').contains(title).then(async (element) => {
            await element.parent('a').click();
        });
    }

    async setMPageTitle(value) {
        await cy.get('textarea[data-test-editor-title-input]').click().type(value).wait(1000);
    }

    async setPageContent(value) {
        await cy.get('p[data-koenig-dnd-droppable="true"]').click().type(value).wait(1000);
    }

    async savePage() {
        await cy.get('button[data-test-button="publish-flow"]').then(async (element) => {
            await element.click();
        }).wait(1000);
    }

    async confirmSavePage() {
        await cy.get('button[data-test-button="continue"]').then(async (element) => {
            await element.click();
        }).wait(1000);
    }

    async publishPage() {
        await cy.get('button[data-test-button="confirm-publish"]').then(async (element) => {
            await element.click();
        }).wait(1000);
    }

    async openSettings() {
        await cy.get('button.settings-menu-toggle').then(async (element) => {
            await element.click();
        }).wait(1000);
    
    }

    async deletePage() {
        await cy.get('div.settings-menu-delete-button').find('button').then(async (element) => {
            await element.click();
        }).wait(1000);
    }

    async confirmDeletePage() {
        await cy.get('span[data-test-task-button-state]').contains('Delete').then(async (element) => {
            await element.parent('button').click();
        });
    }

    validatePage(value, exist = true) {
        cy.get('h3.gh-content-entry-title').contains(value).should(exist ? 'exist' : 'not.exist');
    }
}

export default new PagesPageObject();

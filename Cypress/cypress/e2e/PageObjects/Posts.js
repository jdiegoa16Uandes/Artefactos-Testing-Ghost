class PostsPageObject {

    data = require('../../fixtures/admin.json');

    async gotoCreatePost() {
        cy.contains('New post').click();
    }

    async setPostTitle(title) {
        cy.get('[placeholder="Post title"]').type(title);
    }

    async setPostContent(content) {
        cy.get('p[data-koenig-dnd-droppable]').type(content).wait(10000);
    }
    async gotoPublish(){
        await cy.get('button[data-test-button="publish-flow"]').then((element) => {
            element.click();
        }).wait(2000);
    }
    async gotoContinuePublish(){
        await cy.get('button[data-test-button="continue"]').then((element) => {
            element.click();
        }).wait(2000);
    }
    async gotoConfirmPublish(){
        await cy.get('button[data-test-button="confirm-publish"]').then((element) => {
            element.click();
        }).wait(2000);
    }
    validatePost(title) {
        cy.get('h3.gh-content-entry-title').contains(title).should('exist');
    }
    
}

export default new PostsPageObject();

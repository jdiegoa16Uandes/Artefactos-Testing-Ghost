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
        }).wait(3000);
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
    async selectType(){
        await cy.get('p[data-koenig-dnd-droppable]').click().wait(2000);
        await cy.get('div[data-kg-plus-button]').click().wait(2000);
        await cy.get('button[data-kg-cardmenu-idx="1"]').click().wait(2000);
    }
    async setPostContentEspecial(content) {
        await cy.get("div.not-kg-prose").type(content);
        await cy.get('[placeholder="Post title"]').click().wait(2000);
    }


    validatePost(title) {
        cy.get('h3.gh-content-entry-title').contains(title).should('exist');
    }
    validatePostContent(content){
        cy.get('div.koenig-react-editor').contains(content).should('exist');
    }
    
}

export default new PostsPageObject();

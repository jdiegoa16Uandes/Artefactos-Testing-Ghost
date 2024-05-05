class PostsPageObject {

    data = require('../../fixtures/admin.json');

    async gotoCreatePost() {
        cy.contains('New post').click();
    }

    async setPostTitle(title) {
        await cy.get('[placeholder="Post title"]').type(title);
    }

    async setPostContent(content) {
        cy.get('p[data-koenig-dnd-droppable]]').type(content).wait(10000);
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
    async selectType(id){
        await cy.get('p[data-koenig-dnd-droppable]').click().wait(2000);
        await cy.get('div[data-kg-plus-button]').click().wait(2000);
        await cy.get(`button[data-kg-cardmenu-idx="${id}"]`).click().wait(2000);
    }
    async setPostContentEspecial(content) {
        await cy.get("div.not-kg-prose").type(content);
        await cy.get('[placeholder="Post title"]').click().wait(2000);
    }
    async gotoImage(){
        await cy.get('button.gh-editor-feature-image-unsplash').then((element) => {
            element.click();
        }).wait(2000);
    }
    async setImage(search) {
        cy.get('input.gh-unsplash-search').type(search);
    }
    validatePost(title) {
        cy.get('h3.gh-content-entry-title').contains(title).should('exist');
    }
    async selectImage(){
        await cy.get('div.gh-unsplash-photo-container').first().then(($img) => {
            cy.wrap($img).find('a.gh-unsplash-button:contains("Insert image")').click();;
        }).wait(2000);
    
    }
    validatePostContent(content){
        const element = cy.get('div.whitespace-normal p')
        element.contains(content).should('exist')
    }
    validatePostContentHTML(content){
        const element = cy.get('div.min-h-\\[3\\.5vh\\].whitespace-normal h5')
        element.contains(content).should('exist')
    }
    validateImage(){
        cy.get('div.gh-editor-feature-image').first().then(($div) => {
            cy.wrap($div).find('img').should('exist');
        });
    }

    //R

    async gotoPost(){
        await cy.get('.gh-posts-list-item').first().find('a[href^="#/editor/post"]').then((element) => {
            element.click();
        }).wait(2000);
       
    }

    async modifyTitle(modifiedTitle){
        await cy.get('[placeholder="Post title"]').clear().type(modifiedTitle);
    }

    async modifyText(modifiedText) {
        await cy.get('p[data-koenig-dnd-droppable]').then($els => {
            if ($els.length === 1) {
                cy.wrap($els).clear().type(modifiedText).wait(10000);
            } else if ($els.length > 1) {
                cy.wrap($els.eq(1)).clear().type(modifiedText).wait(10000);
            }

        });
    }
    

    async updatePost(){
        await cy.get('button[data-test-button="publish-save"]').then((element) => {
            element.click();
        }).wait(4000);
    }


    validatePostContent2(newContent, exist = true) {
        cy.get('p[data-koenig-dnd-droppable="true"]').contains(newContent).should(exist ? 'exist' : 'not.exist');
    }

    async updatePost(){
        await cy.get('button[data-test-button="publish-save"]').then((element) => {
            element.click();
        }).wait(2000);
    }

    async confirmLeaveWithoutSave() {
        await cy.get('div.modal-footer button.gh-btn.gh-btn-red').contains('Leave').click({force: true});
        await cy.get('button.close').first().click();
        await cy.wait(2000);
    }

    async validateNotTitle(newTitle) {
        await cy.get('h3.gh-content-entry-title').first().should('not.contain', newTitle);
    }

    async gotoUnpublish(){
        await cy.get('button[data-test-button="update-flow"]').then((element) => {
            element.click();
        }).wait(3000);
    }

    async confirmUnpublish(){
        await cy.get('button[data-test-button="revert-to-draft"]').then((element) => {
            element.click();
        }).wait(3000);
    }

    async openSettings() {
        await cy.get('button.settings-menu-toggle').then(async (element) => {
            await element.click();
        }).wait(3000);
    
    }

    async deletePost() {
        await cy.get('div.settings-menu-delete-button').find('button').then(async (element) => {
            await element.click();
        }).wait(2000);
    }

    async confirmDeletePost() {
        await cy.get('span[data-test-task-button-state]').contains('Delete').then(async (element) => {
            await element.parent('button').click();
        }).wait(5000);
        

    }



    
}

export default new PostsPageObject();

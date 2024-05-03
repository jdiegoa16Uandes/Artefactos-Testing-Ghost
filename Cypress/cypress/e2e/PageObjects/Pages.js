class PagesPageObject {

    data = require('../../fixtures/admin.json');

    async gotoCreatePost() {
        cy.contains('New post').click();
    }

    async setPostTitle(title) {
        cy.get('[placeholder="Post title"]').type(title);
    }

    async setPostContent(content) {
        cy.get('p[data-koenig-dnd-droppable]').type(content);
    }
}

export default new PagesPageObject();

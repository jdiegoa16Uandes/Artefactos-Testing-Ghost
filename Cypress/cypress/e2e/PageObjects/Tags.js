class TagsPageObject {
    
    async gotoTagsPage() {
         await cy.contains('Tags').click();
    }

    async gotoNewtagPage() {

        await cy.get('a[href="#/tags/new/"]').click();
    }

    async setTagName(tagName) {
        cy.get('input[id="tag-name"]').type(tagName);
    }

    async setTagDescription(tagDescription) {
        cy.get('textarea[id="tag-description"]').type(tagDescription);
    }

    // cargar imput tipo file
     async setTagImage() {
        cy.get('type[class="file"]').attachFile("../../fixtures/assets/imagen.jpg");

     }

     async setColor() {
        cy.get('input[data-test-input="accentColor"]').type('ff0000');
     }
     
     async saveTag() {
        cy.get('button[data-test-button="save"]').click().wait(5000);
     }

   
     async validateTag(tagName) {
        cy.get('h3.gh-tag-list-name').contains(tagName).should('exist');
     }
        
}

export default new TagsPageObject();
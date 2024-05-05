class TagsPageObject {
    
    async gotoTagsPage() {
         await cy.contains('Tags').click().wait(2000);
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

     async validateRestriction(){

        cy.get("span[data-test-task-button-state='failure']").should('exist');
     }

     async editarTag() {
        
        cy.get('a[class="ember-view gh-list-data gh-tag-list-title gh-list-cellwidth-70"]').first().click();
     }

     async deleteTag() {
        // obtener el href del primer tag
        await cy.get('a[class="ember-view gh-list-data gh-tag-list-title gh-list-cellwidth-70"]').first().invoke('attr', 'href').then((href) => {

           
            let cambio = href.slice(8, -1);
            
            cy.visit("https://ghost-mnkl.onrender.com/ghost/"+href);
            cy.get('button[data-test-button="delete-tag"]').click();
            cy.get('button[data-test-button="confirm"]').click();
            cy.get('h3.gh-tag-list-name').contains(cambio).should('not.exist');
          
        });
     }

     async  internalTag() {

        cy.get('button[data-test-tags-nav="internal"]').click();
     }

     
        
}

export default new TagsPageObject();
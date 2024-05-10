class TagsPageObject {
    
    async gotoTagsPage() {
         cy.visit('https://ghost-mnkl.onrender.com/ghost/#/tags').wait(5000);
         
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
        cy.get('h3.gh-tag-list-name').should('exist').wait(2000);
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
            
            cy.visit("https://ghost-mnkl.onrender.com/ghost/"+href).wait(2000);
            cy.get('button[data-test-button="delete-tag"]').click();
            cy.get('button[data-test-button="confirm"]').click();
            cy.get('h3.gh-tag-list-name').should('exist');
          
        });
     }

     async  internalTag() {

        cy.get('button[data-test-tags-nav="internal"]').click();
     }

     // version 3 de ghost

       async gotoTagsPageV3() {
         await cy.get('a[href="#/tags/"]').then(async (element) => {
             await element.click();
         }).wait(3000);
     }

       async gotoNewtagPageV3() {
         cy.get('a[href="#/tags/new/"]').click();
         
       
       }

       async saveTagV3() {
         cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click().wait(200);
       }

       async findTag(tagName) {
         cy.get('a[href="#/tags/'+tagName+'/"]').then (async(element) => {
               await element.click();
            }).wait(2000);
       }

       async validateTagV3(tagName) {
         cy.get('h3.gh-tag-list-name').contains(tagName).should('exist').wait(2000);
       }

       async deleteTagV3() {
         cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click();
         cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').eq(0).click();
       }

       async validateDeleteTagV3(tagName) {
         cy.get('h3.gh-tag-list-name').contains(tagName).should('not.exist');
       }

     
        
}

export default new TagsPageObject();
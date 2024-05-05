const assert = require('assert');

class TagsPageObject {

    constructor(driver) {
        this.driver = driver;
    }

    async gotoTagsPage() {

        // ir a una url 
        await this.driver.url('https://ghost-mnkl.onrender.com/ghost/#/tags');
   }

   async gotoNewtagPage() {

    await this.driver.url(' https://ghost-mnkl.onrender.com/ghost/#/tags/new');
   
    //    let element = await this.driver.$('a[href="#/tags/new/"]');
    //    return await element.click();
   }

   async setTagName(tagName) {
       let element = await this.driver.$('input[id="tag-name"]');
       return await element.setValue(tagName);
   }

   async setTagDescription(tagDescription) {
       let element = await this.driver.$('textarea[id="tag-description"]');
       return await element.setValue(tagDescription);
   }

   async setColor() {
       let element = await this.driver.$('input[data-test-input="accentColor"]');
       return await element.setValue('ff0000');
   }

   async saveTag() {
       let element = await this.driver.$('button[data-test-button="save"]');
       return await element.click();
   }

   async validateTag(tagName) {
       let elements = await this.driver.$$('h3.gh-tag-list-name');
       for (let element of elements) {
           let response = await element.getText();
           if(response.includes(tagName)){
               assert.equal(true, response.includes(tagName));
           }
       }
   }

   async editarTag() {

    //seleccionar el primer tag
    let element = await this.driver.$('a[class="ember-view gh-list-data gh-tag-list-title gh-list-cellwidth-70"]');
    return await element.click();

      
   }

   async validateError() {
         let element = await this.driver.$('span[data-test-task-button-state="failure"]');
         let response = await element.getText();

         assert.equal(true, response.includes('Retry'));
    }

    async deleteTag() {

        let element = await this.driver.$('button[data-test-button="delete-tag"]');
        await element.click();
        let elementConfirm = await this.driver.$('button[data-test-button="confirm"]');
        await elementConfirm.click();

     
        //cy.get('h3.gh-tag-list-name').contains(cambio).should('not.exist');
    };

    async createTagIntern(){

        let element = await this.driver.$('button[data-test-tags-nav="internal"]');
        return await element.click();
    }

  



}


module.exports = TagsPageObject;
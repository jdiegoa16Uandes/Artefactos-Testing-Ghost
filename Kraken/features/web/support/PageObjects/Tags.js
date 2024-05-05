const assert = require('assert');

class TagsPageObject {

    constructor(driver) {
        this.driver = driver;
    }

    async gotoTagsPage() {
        let element = await this.driver.$('a[data-test-nav="tags"]');
        return await element.click();
   }

   async gotoNewtagPage() {
       let element = await this.driver.$('a[href="#/tags/new/"]');
       return await element.click();
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



}


module.exports = TagsPageObject;
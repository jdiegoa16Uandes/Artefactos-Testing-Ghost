const assert = require('assert');

class PostPageObject {

    constructor(driver) {
        this.driver = driver;
    }
    async gotoPost() {
        let element = await this.driver.$(`a[data-test-nav="posts"]`);
        return await element.click();
    }
    async gotoNewPost() {
        let element = await this.driver.$(`a[data-test-new-post-button]`);
        return await element.click();
    }
    async gotoImage(){
        let element = await this.driver.$('button.gh-editor-feature-image-unsplash');
        return await element.click();
    }
    async setImage(search) {
        let element = await this.driver.$('input.gh-unsplash-search');
        return await element.setValue(search);
    }
    async selectImage(){
        let element = await this.driver.$('#unsplash-selector-wormhole > div.absolute.top-8.right-8.bottom-8.left-8.br4.overflow-hidden.bg-white.z-9999 > div.flex.flex-column.h-100 > div > div > section > div:nth-child(1) > a:nth-child(1) > div > div > div.gh-unsplash-photo-footer > a');    
        return await element.click();
    }
    async selectType(id) {
        let element = await this.driver.$(`button[data-kg-cardmenu-idx="${id}"]`);
        return await element.click();
    }
    async setContentMD(content) {
        let element = await this.driver.$('div.not-kg-prose');
        return await element.setValue(content);
    }
    async setTitle(title) {
        let element = await this.driver.$('textarea[data-test-editor-title-input]');
        return await element.setValue(title);
    }
    async validateImage(){
        let element = await this.driver.$('div.gh-editor-feature-image');
        assert.ok(element)
    }
    
    async validatePostContent(content, exist = true){
        let elements = await this.driver.$$('div.whitespace-normal p')
        let response = await elements[0].getText()
        if(exist) {
            assert.equal(response, content);
        } else {
            assert.notStrictEqual(response, content);
        }
    }
    async validatePostContentH(content, exist = true){
        let elements = await this.driver.$$('div.min-h-\\[3\\.5vh\\].whitespace-normal')
        let response = await elements[0].getText()
        if(exist) {
            assert.strictEqual(response, content);
        } else {
            assert.notStrictEqual(response, content);
        }
    }

    //R

    async gotoSpecificPost() {
        let element = await this.driver.$('.gh-post-list-title:first-child'); 
        await element.click(); 
    }

    async modifyTitle(title) {
        let element = await this.driver.$('textarea[data-test-editor-title-input]');
        return await element.setValue(title);
    }
    async setText(content) {
        let elements = await this.driver.$$('div.kg-prose');
        if (elements.length === 1) {
            await elements[0].click(); 
            await elements[0].keys(['Control', 'a']); 
            await elements[0].keys('Backspace'); 
            return await elements[0].setValue(content);
        } else if (elements.length > 1) {
            await elements[1].click(); 
            await elements[1].keys(['Control', 'a']); 
            await elements[1].keys('Backspace'); 
            return await elements[1].setValue(content);
        }
    }
    

    
    
    
    


}

module.exports = PostPageObject;
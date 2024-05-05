class DashboardPageObject {

    constructor(driver) {
        this.driver = driver;
    }

    async gotoPages() {
        let element = await this.driver.$(`a[data-test-nav="pages"]`);
        return await element.click();
    }

    async gotoMembers() {
        let element = await this.driver.$(`a[data-test-nav="members"]`);
        return await element.click();
    }
    async gotoFirstPostPublished(title){
        let element = await this.driver.$$(`h3.gh-content-entry-title`)
        let response = await element[0].getText(); 
        let elementC = await this.driver.$(`h3.gh-content-entry-title`)
        return await response===title ? elementC.click() : none;
    }

    //R
    async gotoPublished() {
        let element = await this.driver.$(`a[href="#/posts/?type=published"]`);
        return await element.click();
    }

}

module.exports = DashboardPageObject;
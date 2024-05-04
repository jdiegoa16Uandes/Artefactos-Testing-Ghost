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
}

module.exports = DashboardPageObject;
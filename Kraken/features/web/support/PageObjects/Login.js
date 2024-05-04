class LoginPageObject {

    constructor(driver) {
        this.driver = driver;
    }

    async setLoginEmail(email) {
        let element = await this.driver.$('input[name="identification"]');
        return await element.setValue(email);
    }

    async setLoginPassword(password) {
        let element = await this.driver.$('input[name="password"]');
        return await element.setValue(password);
    }

    async submitLogin() {
        let element = await this.driver.$('button[type="submit"]');
        return await element.click();
    }
}

module.exports = LoginPageObject;
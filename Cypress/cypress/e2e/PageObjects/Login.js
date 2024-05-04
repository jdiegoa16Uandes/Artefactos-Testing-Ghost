class LoginPageObject {
    
    data = require('../../fixtures/admin.json');

    async gotoLogin() {
        await cy.visit(`${this.data.adminUrl}/#/signin`);
    }

    async setLoginEmail() {
        await cy.get('input[name="identification"]').type(this.data.adminEmail);
    }

    async setLoginPassword() {
        await cy.get('input[name="password"]').type(this.data.adminPassword);
    }

    async submitLogin() {
        await cy.get('button[data-test-button="sign-in"]').then((element) => {
            element.click();
        }).wait(5000);
    }
}

export default new LoginPageObject();

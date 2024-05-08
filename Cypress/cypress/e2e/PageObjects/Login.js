class LoginPageObject {
    
    data = require('../../fixtures/admin.json');

    async gotoLogin(version = 5) {
        let url = version == 5 ? this.data.adminUrl : this.data.adminUrlv3;

        await cy.visit(`${url}/#/signin`).wait(5000);
    }

    async setLoginEmail() {
        await cy.get('input[name="identification"]').type(this.data.adminEmail);
    }

    async setLoginPassword() {
        await cy.get('input[name="password"]').type(this.data.adminPassword);
    }

    async submitLogin(version = 5) {
        let selector = version == 5 ? 'button[data-test-button="sign-in"]' : 'button[type="submit"]';

        await cy.get(selector).then((element) => {
            element.click();
        }).wait(5000);
    }

    
}

export default new LoginPageObject();

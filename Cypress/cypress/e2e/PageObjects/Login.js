class LoginPageObject {
    
    data = require('../../fixtures/admin.json');

    async gotoLogin() {
        await cy.visit(`${this.data.adminUrl}/#/signin`);
    }

    async setLogin() {
        await cy.get('input[name="identification"]').type(this.data.adminEmail);
        await cy.get('input[name="password"]').type(this.data.adminPassword);
    }

    async submitLogin() {
        await cy.get('button[type="submit"]').click();
    }
}

export default new LoginPageObject();

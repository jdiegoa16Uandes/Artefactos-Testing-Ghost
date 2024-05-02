class LoginPageObject {
    
    data = require('../../fixtures/admin.json');

    async login(email, password) {
        cy.visit(`${this.data.adminUrl}/#/signin`);
        cy.get('input[name="identification"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }
}

export default new LoginPageObject();

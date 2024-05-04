import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';

describe('template spec', () => {

    before(async () => {
        // Given
        await Login.gotoLogin();  
        await Login.setLoginEmail();
        await Login.setLoginPassword();
        await Login.submitLogin();
    });

    it('EP16 - Crear un miembro con datos básicos validos', async () => {
        cy.on('uncaught:exception', (err, runnable) => { return false });

        const member = {
            'name': faker.person.fullName(),
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };
        
        // Given
        await Dashboard.gotoMembers();
        await Members.gotoCreateMember();

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        await Members.saveMember();
        await Dashboard.home();
        await Dashboard.gotoMembers();

        // Then
        Members.validateMember(member.email);
  });

});
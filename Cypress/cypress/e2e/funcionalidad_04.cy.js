import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';
import { beforeEach } from 'mocha';

describe('template spec', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });

    it('EP16 - Crear un miembro con datos básicos validos', async () => {
        const member = {
            'name': faker.person.fullName(),
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        Login.submitLogin();
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

    it('EP17 - Crear un miembro con correo electrónico duplicado', async () => {
        const member = {
            'name': faker.person.fullName(),
            'email': 'Pruebas-equipo-15@uniandes.edu.co',
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };
        
        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        Login.submitLogin();
        await Dashboard.gotoMembers();
        await Members.gotoCreateMember();

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        await Members.saveMember();

        // Then
        Members.validateDuplicatedEmail();
    });

    it('EP18 - Crear un miembro sin correo electrónico', async () => {
        const member = {
            'name': faker.person.fullName(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        Login.submitLogin();
        await Dashboard.gotoMembers();
        await Members.gotoCreateMember();

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        await Members.saveMember();

        // Then
        Members.validateDuplicatedEmail();
    });

});
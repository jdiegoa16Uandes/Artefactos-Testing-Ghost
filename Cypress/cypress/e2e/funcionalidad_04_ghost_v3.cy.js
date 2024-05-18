import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';
import { beforeEach } from 'mocha';

describe('escenario aleatorio', () => {
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

        cy.viewport(1920, 1080);

        // Given
        Login.gotoLogin(3);
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G3/EP16_1_login', { 'overwrite': true });
        Login.submitLogin(3);
        await cy.screenshot('G3/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers(3);
        await cy.screenshot('G3/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember(3);
        await cy.screenshot('G3/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberEmail(member.email, 3);
        await cy.screenshot('G3/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember(3);
        await Members.closeModal();
        await cy.screenshot('G3/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home(3);
        await cy.screenshot('G3/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers(3);
        await cy.screenshot('G3/EP16_8_membersPage', { 'overwrite': true });

        // Then
        Members.validateMember(member.email, 3);
    });

    it('EP17 - Crear un miembro con correo electrónico duplicado', async () => {
        const member = {
            'name': faker.person.fullName(),
            'email': 'Pruebas-equipo-15@uniandes.edu.co',
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

        cy.viewport(1920, 1080);
        
        // Given
        Login.gotoLogin(3);
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G3/EP17_1_login', { 'overwrite': true });
        Login.submitLogin(3);
        await cy.screenshot('G3/EP17_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers(3);
        await cy.screenshot('G3/EP17_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember(3);
        await cy.screenshot('G3/EP17_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberEmail(member.email, 3);
        await cy.screenshot('G3/EP17_5_memberData', { 'overwrite': true });
        await Members.saveMember(3);
        await cy.screenshot('G3/EP17_6_memberSaved', { 'overwrite': true });

        // Then
        Members.validateDuplicatedEmail(3);
    });

    it('EP18 - Crear un miembro sin correo electrónico', async () => {
        const member = {
            'name': faker.person.fullName(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

        cy.viewport(1920, 1080);

        // Given
        Login.gotoLogin(3);
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G3/EP18_1_login', { 'overwrite': true });
        Login.submitLogin(3);
        await cy.screenshot('G3/EP18_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers(3);
        await cy.screenshot('G3/EP18_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember(3);
        await cy.screenshot('G3/EP18_4_memberCreate', { 'overwrite': true });

        // When
        await Members.saveMember(3);
        await cy.screenshot('G3/EP18_6_memberSaved', { 'overwrite': true });

        // Then
        Members.validateEmptyEmail();
    });

});
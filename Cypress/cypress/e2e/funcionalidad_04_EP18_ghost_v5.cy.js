import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';
import { beforeEach } from 'mocha';

describe('template spec', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });

    it('EP18 - Crear un miembro sin correo electrónico', async () => {
        const member = {
            'name': faker.person.fullName(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

        cy.viewport(1920, 1080);

        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G5/EP18_1_login', { 'overwrite': true });
        Login.submitLogin();
        await cy.screenshot('G5/EP18_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        await cy.screenshot('G5/EP18_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        await cy.screenshot('G5/EP18_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        await cy.screenshot('G5/EP18_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        await cy.screenshot('G5/EP18_6_error', { 'overwrite': true });

        // Then
        Members.validateEmptyEmail();
    });

});
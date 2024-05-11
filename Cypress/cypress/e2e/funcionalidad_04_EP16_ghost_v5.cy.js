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

        cy.viewport(1920, 1080);

        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        Members.validateMember(member.email);
    });

});
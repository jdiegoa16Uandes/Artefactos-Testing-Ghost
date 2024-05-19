import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';
import { beforeEach } from 'mocha';

describe('pseudo', { testIsolation: true }, () => {
    let member;

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.wait(10000);
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });

    before(() => {
        cy.request('https://my.api.mockaroo.com/MEMBER.json?key=98fb9f30').then(data => {
            expect(data.status).to.eq(200);
            member = data.body;
        });
    });

    it('EP16 - Crear un miembro con datos básicos validos', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember(member.email);
    });

    it('EP17 - Crear un miembro con correo electrónico duplicado', async () => {
        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP17_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP17_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP17_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP17_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP17_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP17_6_error', { 'overwrite': true });

        // Then
        await Members.validateDuplicatedEmail();
    });

    it('EP18 - Crear un miembro sin correo electrónico', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP18_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP18_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP18_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP18_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP18_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP18_6_error', { 'overwrite': true });

        // Then
        await Members.validateEmptyEmail();
    });

    it('EP21 - Crear un miembro con correo electrónico sin signo @', async () => {
        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP17_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP17_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP17_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP17_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.name);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP17_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP17_6_error', { 'overwrite': true });

        // Then
        await Members.validateInvalidEmail();
    });

    it('EP22 - Crear un miembro con el nombre conformado por espacios', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name_as_spaces);
        await Members.setMemberEmail('ep22' + member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember('ep22' + member.email, 5, true);
    });

    it('EP23 - Crear un miembro con el correo con mas de 200 caracteres', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email_200_char);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP17_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP17_6_error', { 'overwrite': true });

        // Then
        await Members.validateLongEmail();
    });

    it('EP24 - Crear un miembro con el correo con el nombre de usuario con 1 caracter', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email_1_char);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember(member.email_1_char);
    });

    it('EP25 - Crear un miembro con el correo conformado por caracteres especiales', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email_w_special_chars);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember(member.email_w_special_chars);
    });

    it('EP26 - Crear un miembro con el nombre conformado con caracteres especiales', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name_w_special_chars);
        await Members.setMemberEmail('ep26' + member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember('ep26' + member.email);
    });

    it('EP27 - Crear un miembro con el nombre conformado por numeros', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name_as_int);
        await Members.setMemberEmail('ep27' + member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember('ep27' + member.email);
    });

    it('EP28 - Crear un miembro con el nombre con mas de 200 caracteres', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name_200_char);
        await Members.setMemberEmail('ep28' + member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP17_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP17_6_error', { 'overwrite': true });

        // Then
        await Members.validateLongName();
    });

    it('EP29 - Crear un miembro con el nombre con 1 caracter', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name_1_char);
        await Members.setMemberEmail('ep29' + member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember('ep29' + member.email);
    });

    it('EP30 - Crear un miembro con el nombre con codigo HTML', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name_as_html);
        await Members.setMemberEmail('ep30' + member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember('ep30' + member.email);
    });

    it('EP31 - Crear un miembro con una nota de 1 carácter', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail('ep31' + member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note_1_char);
        //await cy.screenshot('G5/EP16_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP16_6_memberSaved', { 'overwrite': true });
        await Dashboard.home();
        //await cy.screenshot('G5/EP16_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_8_membersPage', { 'overwrite': true });

        // Then
        await Members.validateMember('ep31' + member.email);
    });

    it('EP32 - Crear un miembro con una nota con mas de 600 caracteres', async () => {
        // Given
        Login.gotoLogin();
        Login.setLoginEmail();
        Login.setLoginPassword();
        //await cy.screenshot('G5/EP16_1_login', { 'overwrite': true });
        Login.submitLogin();
        //await cy.screenshot('G5/EP16_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoMembers();
        //await cy.screenshot('G5/EP16_3_membersPage', { 'overwrite': true });
        await Members.gotoCreateMember();
        //await cy.screenshot('G5/EP16_4_memberCreate', { 'overwrite': true });

        // When
        await Members.setMemberName(member.name);
        await Members.setMemberEmail(member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note_600_char);
        //await cy.screenshot('G5/EP17_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP17_6_error', { 'overwrite': true });

        // Then
        await Members.validateLongNote();
    });
});
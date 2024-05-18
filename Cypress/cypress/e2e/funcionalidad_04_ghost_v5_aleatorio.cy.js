import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Members from './PageObjects/Members';
import { beforeEach } from 'mocha';

describe('escenario aleatorio', { testIsolation: true }, () => {
    var newEmail = '';

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.wait(5000);
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });

    it('EP16 - Crear un miembro con datos básicos validos', async () => {
        const member = {
            'name': faker.person.fullName(),
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

        newEmail = member.email;

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
        const member = {
            'name': faker.person.fullName(),
            'email': newEmail,
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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
        const member = {
            'name': faker.person.fullName(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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
        const member = {
            'name_as_spaces': '             ',
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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
        await Members.validateMember(member.email, 5, true);
    });

    it('EP23 - Crear un miembro con el correo con mas de 200 caracteres', async () => {
        const member = {
            'name': faker.person.fullName(),
            'email_200_char': faker.string.alpha(200) + faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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
        const member = {
            'name': faker.person.fullName(),
            'email_1_char': faker.string.alpha(1) + '@' + faker.internet.domainName(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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
        const member = {
            'name': faker.person.fullName(),
            'email_w_special_chars': faker.string.fromCharacters('·$%&#!', 10) + '@' + faker.internet.domainName(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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
        const member = {
            'name_w_special_chars': faker.string.fromCharacters('·$%&#!', 10),
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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

    it('EP27 - Crear un miembro con el nombre conformado por numeros', async () => {
        const member = {
            'name_as_int': faker.number.int(),
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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

    it('EP28 - Crear un miembro con el nombre con mas de 200 caracteres', async () => {
        const member = {
            'name_200_char': faker.lorem.words(100),
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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
        await Members.setMemberEmail(member.email);
        await Members.setMemberLabel(member.label);
        await Members.setMemberNote(member.note);
        //await cy.screenshot('G5/EP17_5_memberData', { 'overwrite': true });
        await Members.saveMember();
        //await cy.screenshot('G5/EP17_6_error', { 'overwrite': true });

        // Then
        await Members.validateLongName();
    });

    it('EP29 - Crear un miembro con el nombre con 1 caracter', async () => {
        const member = {
            'name_1_char': faker.string.alpha(1),
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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

    it('EP30 - Crear un miembro con el nombre con codigo HTML', async () => {
        const member = {
            'name_as_html': '<' + faker.lorem.word() + ' />',
            'email': faker.internet.email(),
            'label': faker.lorem.word(),
            'note': faker.lorem.paragraph()
        };

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

});
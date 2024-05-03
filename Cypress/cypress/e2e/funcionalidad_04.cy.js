import { faker } from '@faker-js/faker';
import LoginPageObject from './PageObjects/Login';
import DashboardPageObject from './PageObjects/Dashboard';
import MembersPageObject from './PageObjects/Members';
import { beforeEach } from 'mocha';

describe('template spec', () => {

    beforeEach(async () => {
        await LoginPageObject.gotoLogin();
        await LoginPageObject.setLogin();
        await LoginPageObject.submitLogin();
        
    });

    it('EP16 - Crear un miembro con datos básicos validos', async () => {
        // Given
        await DashboardPageObject.gotoMembers();
        await MembersPageObject.gotoCreateMember();

        // When
        await MembersPageObject.setMemberName(faker.person.fullName);
        await MembersPageObject.setMemberEmail(faker.internet.email);
        await MembersPageObject.setMemberLabel(faker.word.word);
        await MembersPageObject.setMemberNote(faker.lorem.paragraph);
        await MembersPageObject.saveMember();

        // Then
        await DashboardPageObject.gotoMembers();
  });

})
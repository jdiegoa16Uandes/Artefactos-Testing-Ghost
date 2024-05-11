import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Pages from './PageObjects/Pages';
import { beforeEach } from 'mocha';

describe('template spec', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
    });

    it('EP19 - Crear una página con el titulo y contenido de manera correcta', async () => {
        const page = {
            'title': faker.lorem.sentence(),
            'content': faker.lorem.paragraphs()
        };

        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        await cy.screenshot('G5/EP19_1_login', { 'overwrite': true });
        Login.submitLogin();
        await cy.screenshot('G5/EP19_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoPages();
        await cy.screenshot('G5/EP19_3_pages', { 'overwrite': true });
        await Pages.gotoCreatePage();
        await cy.screenshot('G5/EP19_4_newpage', { 'overwrite': true });

        // When
        await Pages.setMPageTitle(page.title);
        await Pages.setPageContent(page.content);
        await cy.screenshot('G5/EP19_5_pagedata', { 'overwrite': true });
        await Pages.savePage();
        await cy.screenshot('G5/EP19_6_publish', { 'overwrite': true });
        await Dashboard.home();
        await cy.screenshot('G5/EP19_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoPages();
        await cy.screenshot('G5/EP19_8_pages', { 'overwrite': true });

        // Then
        Pages.validatePage(page.title);
    });

});
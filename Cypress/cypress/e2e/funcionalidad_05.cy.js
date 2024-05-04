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
        Login.submitLogin();
        await Dashboard.gotoPages();
        await Pages.gotoCreatePage();

        // When
        await Pages.setMPageTitle(page.title);
        await Pages.setPageContent(page.content);
        await Pages.savePage();
        await Dashboard.home();
        await Dashboard.gotoPages();

        // Then
        Pages.validatePage(page.title);
    });

    it('EP20 - Eliminar una página', async () => {
        const page = {
            'title': faker.lorem.sentence(),
            'content': faker.lorem.paragraphs()
        };

        // Given
        Login.gotoLogin();  
        Login.setLoginEmail();
        Login.setLoginPassword();
        Login.submitLogin();
        await Dashboard.gotoPages();
        await Pages.gotoCreatePage();

        // When
        await Pages.setMPageTitle(page.title);
        await Pages.setPageContent(page.content);
        await Pages.savePage();
        await Dashboard.home();
        await Dashboard.gotoPages();
        await Pages.gotoEditPage(page.title);
        await Pages.openSettings();
        await Pages.deletePage();
        await Pages.confirmDeletePage();
        await Dashboard.home();
        await Dashboard.gotoPages();


        // Then
        Pages.validatePage(page.title, false);
    });

});
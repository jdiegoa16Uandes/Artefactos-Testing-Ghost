import { faker } from '@faker-js/faker';
import Login from './PageObjects/Login';
import Dashboard from './PageObjects/Dashboard';
import Pages from './PageObjects/Pages';
import { beforeEach } from 'mocha';

describe('template spec', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
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
        await cy.screenshot('G5/EP20_1_login', { 'overwrite': true });
        Login.submitLogin();
        await cy.screenshot('G5/EP20_2_dashboard', { 'overwrite': true });
        await Dashboard.gotoPages();
        await cy.screenshot('G5/EP20_3_pages', { 'overwrite': true });
        await Pages.gotoCreatePage();
        await cy.screenshot('G5/EP20_4_newpage', { 'overwrite': true });

        // When
        await Pages.setMPageTitle(page.title);
        await Pages.setPageContent(page.content);
        await cy.screenshot('G5/EP20_5_pagedata', { 'overwrite': true });
        await Pages.savePage();
        await cy.screenshot('G5/EP20_6_publish', { 'overwrite': true });
        await Dashboard.home();
        await cy.screenshot('G5/EP20_7_dashboard', { 'overwrite': true });
        await Dashboard.gotoPages();
        await cy.screenshot('G5/EP20_8_pages', { 'overwrite': true });
        await Pages.gotoEditPage(page.title);
        await cy.screenshot('G5/EP20_9_editpage', { 'overwrite': true });
        await Pages.openSettings();
        await cy.screenshot('G5/EP20_10_settingmenu', { 'overwrite': true });
        await Pages.deletePage();
        await cy.screenshot('G5/EP20_11_delete', { 'overwrite': true });
        await Pages.confirmDeletePage();
        await cy.screenshot('G5/EP20_12_confirmdelete', { 'overwrite': true });
        await Dashboard.home();
        await cy.screenshot('G5/EP20_13_dashboard', { 'overwrite': true });
        await Dashboard.gotoPages();
        await cy.screenshot('G5/EP20_14_pagelist', { 'overwrite': true });


        // Then
        Pages.validatePage(page.title, false);
    });

});
Feature: Pruebas Ghost


@user20 @web
Scenario: EP20 - Eliminar una página
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP20_1_login"
    And I click login button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_2_dashboard"
    And I click on pages
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_3_pages"
    When I click on the new page
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_4_newpage"
    And I enter title "$name_19_1"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "$name_19_2"
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_5_pagedata"
    And I click on button publish
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP20_6_publish"
    And I navigate to page "<URL_PAGES>"
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_8_pages"
    And I edit the page "$$name_19_1"
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_9_editpage"
    And I open the settings menu
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_10_settingmenu"
    And I click the delete button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_11_delete"
    And I click the confirm delete button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP20_12_confirmdelete"
    Then I navigate to page "<URL_PAGES>"
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP20_14_pagelist"
    And I validate the page "$$name_19_1" is not on the list

    
  
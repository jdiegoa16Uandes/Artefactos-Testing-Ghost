Feature: Pruebas Ghost


@user19 @web
Scenario: EP19 - Crear una página con el titulo y contenido de manera correcta
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP19_1_login"
    And I click login button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP19_2_dashboard"
    And I click on pages
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP19_3_pages"
    When I click on the new page
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP19_4_newpage"
    And I enter title "$string_19_1"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "$string_19_2"
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP19_5_pagedata"
    And I click on button publish
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP19_6_publish"
    Then I navigate to page "<URL_PAGES>"
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP19_8_pages"
    And I verify the page was created with "$$string_19_1"


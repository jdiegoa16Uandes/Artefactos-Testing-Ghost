Feature: Pruebas Ghost


@user20 @web
Scenario: EP20 - Eliminar una página
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on pages
    And I wait for 2 seconds
    When I click on the new page
    And I wait for 2 seconds
    And I enter title "<PAGE_TITLE>"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "<PAGE_CONTENT>"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 5 seconds
    And I navigate to page "<URL_PAGES>"
    And I wait for 2 seconds
    And I edit the page "<PAGE_TITLE>"
    And I wait for 2 seconds
    And I open the settings menu
    And I wait for 2 seconds
    And I click the delete button
    And I wait for 2 seconds
    And I click the confirm delete button
    And I wait for 2 seconds
    Then I navigate to page "<URL_PAGES>"
    And I wait for 5 seconds
    And I validate the page "<PAGE_TITLE>" is not on the list

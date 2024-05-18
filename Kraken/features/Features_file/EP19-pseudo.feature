Feature: Pruebas Ghost


@user19 @web
Scenario: EP19 - Crear una página con el titulo y contenido de manera correcta
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
    And I enter title "PSEUDO_PAGE"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "PSEUDO_PAGE"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 5 seconds
    Then I navigate to page "<URL_PAGES>"
    And I wait for 5 seconds
    And I verify the page was created with "PSEUDO_PAGE"


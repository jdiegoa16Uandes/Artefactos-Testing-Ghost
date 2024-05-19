Feature: Pruebas Ghost


@user18 @web
Scenario: EP29 - Crear un miembro con el nombre con 1 caracter
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on members
    And I wait for 2 seconds
    When I click on the new member
    And I wait for 5 seconds
    And I enter the name of the member "<MEMBER_NAME_1CHAR>"
    And I wait for 2 seconds
    And I enter the email of the member "$email_16_1"
    And I wait for 2 seconds
    And I enter label "$string_16_2"
    And I wait for 2 seconds
    And I enter note "$string_16_3"
    And I wait for 2 seconds
    And I save new member
    And I wait for 2 seconds
    Then I navigate to page "<URL_MEMBERS>"
    And I wait for 5 seconds
    And I verify the member was created with "<MEMBER_NAME_1CHAR>"

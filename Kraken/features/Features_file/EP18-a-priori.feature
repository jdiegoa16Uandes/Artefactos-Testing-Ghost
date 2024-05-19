Feature: Pruebas Ghost


@user18 @web
Scenario: EP18 - Crear un miembro sin correo electrónico
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
    And I enter the name of the member "<MEMBER_NAME>"
    And I wait for 2 seconds
    And I enter the email of the member "<MEMBER_EMAIL_EMPTY>"
    And I wait for 2 seconds
    And I enter label "<MEMBER_LABEL>"
    And I wait for 2 seconds
    And I enter note "<MEMBER_NOTE>"
    And I wait for 2 seconds
    And I save new member
    Then I wait for 2 seconds
    And I verify that the missing email message is shown

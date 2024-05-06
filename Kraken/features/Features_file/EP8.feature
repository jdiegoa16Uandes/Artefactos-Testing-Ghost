Feature: Pruebas Ghost


@user8 @web
Scenario: EP08 - Modificar titulo post existente y salir sin guardar cambios
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on posts published
    And I wait for 2 seconds
    And I click on a specific post
    And I wait for 3 seconds
    And I modify a title "$string_081"
    And I wait for 4 seconds
    And I click on button posts
    And I wait for 2 seconds
    And I click on button leave
    And I wait for 4 seconds
Then I verify title is not modified with "$$string_081"


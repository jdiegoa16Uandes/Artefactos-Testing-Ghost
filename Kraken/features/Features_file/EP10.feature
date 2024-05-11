Feature: Pruebas Ghost


@user10 @web
Scenario: EP10 - Eliminar un post
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP10_1_login"
    And I click login button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP10_2_dashboard"
    And I click on posts published
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP10_3_postsPublished"
    And I click on a specific post
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP10_4_postSelected"
    And I modify a title "$string_0101"
    And I wait for 4 seconds
    And I take a screenshot in "G5" with the name as "EP10_5_modifiedTitle"
    And I click on button update
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP10_6_postUpdated"
    And I click on button options
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP10_7_settings"
    And I click on button delete post
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP10_8_confirmDelete"
    And I click on button delete confirm
    And I wait for 5 seconds
Then I verify title is not in published with title "$$string_0101"
    And I wait for 3 seconds


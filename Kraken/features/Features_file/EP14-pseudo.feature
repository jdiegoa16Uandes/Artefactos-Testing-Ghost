Feature: Pruebas Ghost


@user11 @web
Scenario:  E14 - elminar tag pseudo
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP11_1_login"
    And I click login button
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP11_2_dashboard"
    When I click on tags
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP11_3_tags"
    And I wait for 5 seconds
    And I click on new tag
    And I take a screenshot in "G5" with the name as "EP11_4_new_Tag"
    And I enter tag name "<TAG_NAME01>"
    And I enter tag description "PSEUDO_TAG"
    And I enter a color
    And I save the tag
    And I wait for 5 seconds
    When I click on tags
    And I take a screenshot in "G5" with the name as "EP11_5_tags"
    And I wait for 5 seconds
    And I edit a tag
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP15_4_delete_tag"
    And I wait for 2 seconds
    Then I delete a tag
    And I take a screenshot in "G5" with the name as "EP15_5_dashboard"









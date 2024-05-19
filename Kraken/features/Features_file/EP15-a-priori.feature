Feature: Pruebas Ghost


@user15 @web
Scenario: E15 - crear un tag interno
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP15_1_login"
    And I click login button
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP15_2_dashboard"
    And I wait for 2 seconds
    When I click on tags
    And I take a screenshot in "G5" with the name as "EP15_3_tags"
    And I wait for 5 seconds
    And I create tag intern
    And I take a screenshot in "G5" with the name as "EP15_4_intern_tag"
    And I wait for 1 seconds
    And I click on new tag
    And I take a screenshot in "G5" with the name as "EP15_5_new_intern_tag"
    And I enter tag name "<TAG_NAME01>"
    And I enter tag description "<TAG_DESCRIPTION01>"
    And I enter a color
    And I save the tag
    And I wait for 5 seconds
    When I click on tags
    And I take a screenshot in "G5" with the name as "EP15_6_dashboard"
    And I wait for 5 seconds
    And I create tag intern
    And I take a screenshot in "G5" with the name as "EP15_7_intern_Tag"
    And I wait for 5 seconds
    And I validate the tag "PSEUDO_TAG"








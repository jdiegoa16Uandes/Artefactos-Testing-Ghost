Feature: Pruebas Ghost

@user5 @web
Scenario: EP05 - Crear y publicar post con imagen
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on posts
    And I wait for 2 seconds
    And I click on the new post
    And I wait for 2 seconds
    And I enter title "$string_1"
    And I wait for 2 seconds
    And I go to image
    And I wait for 2 seconds
    And I search image of "cat"
    And I wait for 2 seconds
    And I select image
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 2 seconds
    And I click on asset publish
    And I wait for 2 seconds
    And I click on button publish post
    And I wait for 4 seconds
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I go to the post published with "$$string_1"
    And I wait for 4 seconds
    And I verify the image


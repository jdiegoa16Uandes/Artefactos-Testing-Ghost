Feature: Pruebas Ghost

@user2 @web
Scenario: EP02- Crear y publicar post con contenido markdown
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
    And I enter title "PSEUDO_PAGE"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I click on plus button
    And I wait for 2 seconds
    And I select type markdown
    And I wait for 2 seconds
    And I enter special content "PSEUDO_POST"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 2 seconds
    And I click on asset publish
    And I wait for 2 seconds
    And I click on button publish post
    And I wait for 4 seconds
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I go to the post published with "PSEUDO_PAGE" 
    And I wait for 4 seconds
    And I verify the content special with "PSEUDO_POST"


Feature: Pruebas Ghost

    @user11 @web
    Scenario:  E11 - crear un tag
        Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USER>"
        And I wait for 5 seconds
        And I enter password "<PASSWORD>"
        And I click login button
        And I wait for 5 seconds
        When I click on tags
        And I wait for 5 seconds
        And I click on new tag
        And I enter tag name "kraken"
        And I enter tag description "kraken - informacion"
        And I enter a color
        And I save the tag
        And I wait for 5 seconds
        When I click on tags
        And I wait for 5 seconds
        And I validate the tag "kraken"

    @user12 @web
    Scenario: E12 - crear un tag
        Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USER>"
        And I wait for 5 seconds
        And I enter password "<PASSWORD>"
        And I click login button
        And I wait for 5 seconds
        When I click on tags
        And I edit a tag
        And I wait for 5 seconds
        And I enter tag name "kraken-editor"
        And I enter tag description "kraken-editor -information"
        And I enter a color
        And I save the tag
        And I wait for 5 seconds
        When I click on tags
        And I wait for 5 seconds
        And I validate the tag "kraken-editor"


        @user13 @web
        Scenario: E13 crear un post vacio
        Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USER>"
        And I wait for 5 seconds
        And I enter password "<PASSWORD>"
        And I click login button
        And I wait for 5 seconds
        When I click on tags
        And I wait for 5 seconds
        And I click on new tag
        And I save the tag
        And I wait for 10 seconds
        And I verify the restriction


    @user14 @web
        Scenario: E14 eliminar un tag
        Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USER>"
        And I wait for 5 seconds
        And I enter password "<PASSWORD>"
        And I click login button
        And I wait for 5 seconds
        When I click on tags
        And I edit a tag
        And I wait for 2 seconds
        Then I delete a tag
		
		
		@user15 @web
		Scenario: E15 - crear un tag interno
        Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USER>"
        And I wait for 5 seconds
        And I enter password "<PASSWORD>"
        And I click login button
        And I wait for 5 seconds
        When I click on tags
        And I wait for 5 seconds
        And I create tag intern
        And I click on new tag
        And I enter tag name "kraken-interno"
        And I enter tag description "kraken-interno"
        And I enter a color
        And I save the tag
        And I wait for 5 seconds
        When I click on tags
        And I wait for 5 seconds
        And I create tag intern
        And I wait for 5 seconds
        And I validate the tag "raken-interno"
		


		
       
       

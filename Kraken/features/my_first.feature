Feature: Pruebas Ghost

    @user1 @web
Scenario: EP01 - Crear y publicar post
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
    And I go to content
    And I wait for 2 seconds
    And I enter content "$string_2"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 2 seconds
    And I click on asset publish
    And I wait for 2 seconds
    And I click on button publish post
    And I wait for 4 seconds
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I verify the post was created with "$$string_1"


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
    And I enter title "$string_1"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I click on plus button
    And I wait for 2 seconds
    And I select type markdown
    And I wait for 2 seconds
    And I enter special content "$string_2"
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
    And I verify the content with "$$string_2"

@user3 @web
Scenario: EP03- Crear y publicar post con contenido html
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
    And I go to content
    And I wait for 2 seconds
    And I click on plus button
    And I wait for 2 seconds
    And I select type HTML
    And I wait for 2 seconds
    And I enter special content "$string_2"
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
    And I verify the content HTML with "$$string_2"

@user4 @web
Scenario: EP04- Crear y publicar post sin titulo
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
    And I go to content
    And I wait for 2 seconds
    And I enter content "$string_2"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 2 seconds
    And I click on asset publish
    And I wait for 2 seconds
    And I click on button publish post
    And I wait for 4 seconds
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I verify the post was created with "(Untitled)"
    

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

@user16 @web
Scenario: EP16 - Crear un miembro con datos básicos validos
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
    And I enter the name of the member "$name_16_1"
    And I wait for 2 seconds
    And I enter the email of the member "$email_16_1"
    And I wait for 2 seconds
    And I enter label "$string_16_2"
    And I wait for 2 seconds
    And I enter note "$string_16_3"
    And I wait for 2 seconds
    And I save new member
    Then I navigate to page "<URL_MEMBERS>"
    And I wait for 5 seconds
    And I verify the member was created with "$$name_16_1"

@user17 @web
Scenario: EP17 - Crear un miembro con correo electrónico duplicado
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
    And I enter the name of the member "$name_16_1"
    And I wait for 2 seconds
    And I enter the email of the member "<USER>"
    And I wait for 2 seconds
    And I enter label "$string_16_2"
    And I wait for 2 seconds
    And I enter note "$string_16_3"
    And I wait for 2 seconds
    And I save new member
    Then I wait for 2 seconds
    And I verify that the duplicate email message is shown

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
    And I enter the name of the member "$name_16_1"
    And I wait for 2 seconds
    And I enter label "$string_16_2"
    And I wait for 2 seconds
    And I enter note "$string_16_3"
    And I wait for 2 seconds
    And I save new member
    Then I wait for 2 seconds
    And I verify that the missing email message is shown

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
    And I enter title "$string_19_1"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "$string_19_2"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 5 seconds
    Then I navigate to page "<URL_PAGES>"
    And I wait for 5 seconds
    And I verify the page was created with "$$string_19_1"

@user20 @web
Scenario: EP20 - Eliminar una página
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
    And I enter title "$name_19_1"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "$name_19_2"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 5 seconds
    And I navigate to page "<URL_PAGES>"
    And I wait for 2 seconds
    And I edit the page "$$name_19_1"
    And I wait for 2 seconds
    And I open the settings menu
    And I wait for 2 seconds
    And I click the delete button
    And I wait for 2 seconds
    And I click the confirm delete button
    And I wait for 2 seconds
    Then I navigate to page "<URL_PAGES>"
    And I wait for 5 seconds
    And I validate the page "$$name_19_1" is not on the list

    
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
    Scenario: E12 - editar un tag
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
		


		
       
       

@ebaySearch
Feature: Launch eBay and Search

    Scenario Outline: As a user, I can acess eBay and search

        Given I am on eBay landing page
        When I search for ipad
        Then I should get search results for ipad


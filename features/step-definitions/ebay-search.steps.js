import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../pageobjects/ebay-search.page';
import SearchResultsPage from '../pageobjects/ebay-searchresults.page';
const fs = require('fs');


Given(/^I am on eBay landing page$/, async () => {
    await SearchPage.open();


});

When(/^I search for ipad$/, async () => {
    await SearchPage.inputSearch.waitForDisplayed();
    await SearchPage.inputSearch.click();
    await SearchPage.inputSearch.setValue("ipad");
    await SearchPage.searchBtn.click();

});

Then(/^I should get search results for ipad$/, async () => {
    await SearchResultsPage.verifySearchResultsPage();
    await expect(SearchResultsPage.searchResultsFor).toBeDisplayed();
    await expect(SearchResultsPage.searchString).toBeDisplayed();
    await browser.closeWindow();

});
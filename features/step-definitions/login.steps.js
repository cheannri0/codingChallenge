import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import Page from '../pageobjects/page';
import ShopPage from '../pageobjects/shop.page';
const fs = require('fs');

Given(/^I am on Cashrewards login page$/, async () => {
    await LoginPage.open();
    // await LoginPage.loginTxt.waitForDisplayed();

});

When('I login with {string} and {string}', async (email, password) => {
    await LoginPage.loginWithEmail(email, password);

});

Then(/^I should be in Cashrewards shop page$/, async () => {
    await ShopPage.verifyShopPage();
    await expect(ShopPage.linkProfileIcon).toBeDisplayed();
    //browser.closeWindow

});

When(/^I logout from Cashrewards$/, async () => {
    await LoginPage.logout();
});

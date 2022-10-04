import Page from './page';
const { config } = require('../../wdio.conf');
const URL = '/login';

class LoginPage extends Page {

    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get submitBtn() {
        return $('form button[type="submit"]');
    }

    async open() {
        browser.setWindowSize(1920, 1080);
        await super.open(config.baseUrl + URL);
    }

    async logout() {
        await super.open(config.baseUrl + "/logout");
    }

    async loginWithEmail(email, password) {

        const BrowserURL = await browser.getUrl();

        if (BrowserURL.includes("/login")) {
            await browser.url('/login');
        }

        let isNotificationExists = await this.notificationPopup.isExisting();
        if (isNotificationExists) {
            await this.btnDontAllowNotification.click();
        }

        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.submitBtn.click();

    }

    //@description: This function gets notificationPopup web-element
    get notificationPopup() {
        return $('.pushcrew-chrome-style-notification');
    }


    //@description: This function gets btnAllowNotification web-element
    get btnAllowNotification() {
        return $('.pushcrew-btn-allow');
    }


    //@description: This function gets btnDontAllowNotification web-element
    get btnDontAllowNotification() {
        return $('.pushcrew-btn-close');
    }


}

export default new LoginPage();

// Page.js
const fs = require('fs');

export default class Page {

    open(path) {
        return browser.url(path)
    }

    verifyUrl(path) {
        return expect(browser).toHaveUrl(path);
    }

}
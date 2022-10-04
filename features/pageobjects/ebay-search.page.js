import Page from './page';


class SearchPage extends Page {

    get inputSearch() {
        return $('//*[@id="gh-ac"]');
    }

    get searchBtn() {
        return $('//*[@id="gh-btn"]');
    }

    async open() {
        browser.setWindowSize(1920, 1080);
        await super.open('https://www.ebay.com.au/');
    }
}

export default new SearchPage();
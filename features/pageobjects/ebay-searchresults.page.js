import Page from './page';


class SearchResultsPage extends Page {

    get searchResultsFor() {
        return $('//h1[contains(text(),"+ results for ")]');
    }

    get searchString() {
        return $('//h1/span[contains(text(),"ipad")]');
    }

    async verifySearchResultsPage() {
        return expect(browser).toHaveUrlContaining('nkw=ipad');
    }
}

export default new SearchResultsPage();
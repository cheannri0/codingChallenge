const Page = require('./page');


class ShopPage {

    get linkProfileIcon() {
        return $('//cr-header/div[1]/div/div[2]/span[2]/span/span[1]');
    }

    async verifyShopPage() {
        await expect(browser).toHaveUrl('https://www.cashrewards.com.au/shop');
    }

}
module.exports = new ShopPage();
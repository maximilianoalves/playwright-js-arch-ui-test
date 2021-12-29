const BasePage = require('./Base.page');

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        //elements
        this.btnSignIn = page.locator('.login');
    }

    async navigate() {
        await super.navigate('index.php');
    }

    async clickSignIn() {
        await this.btnSignIn.first().click();
    }

}

module.exports = HomePage;
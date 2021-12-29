const BasePage = require('./Base.page');

class MyAccountPage extends BasePage {
    constructor(page) {
        super(page);

        //elements
        this.heading = page.locator('h1.page-heading');
    }

    async getHeading() {
        let pageHeading = await this.heading.innerText()
        return pageHeading;
    }

}

module.exports = MyAccountPage;
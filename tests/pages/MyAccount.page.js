const BasePage = require('./Base.page');

class MyAccountPage extends BasePage {
    constructor(page) {
        super(page);

        //elements
        this.heading = page.locator('h1.page-heading');
        this.txtName = page.locator('div.header_user_info > a > span');
    }

    async getHeading() {
        let pageHeading = await this.heading.innerText()
        return pageHeading;
    }

    async getUsername() {
        let username = await this.txtName.innerText();
        return username;
    }

}

module.exports = MyAccountPage;
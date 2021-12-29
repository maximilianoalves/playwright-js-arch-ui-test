class BasePage {

    baseUrl = "http://automationpractice.com";

    constructor(page) {
        this.page = page;
    }

    async navigate(path) {
        await this.page.goto(`${this.baseUrl}/${path}`)
    }
}

module.exports = BasePage;
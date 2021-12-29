const HomePage = require('../pages/Home.page');

// Needs to be higher than the default Playwright timeout
jest.setTimeout(30000);

describe('Login', () => {

    it('Do login with success', async () => {
        const homePage = new HomePage(page);


        await homePage.navigate();
        await homePage.clickSignIn();
    });
});
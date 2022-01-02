const HomePage = require('../pages/Home.page');
const MyAccountPage = require('../pages/MyAccount.page');
const SignInPage = require('../pages/SignIn.page');

describe('Login', () => {

    beforeEach(async () => {
        context = await global.browser.newContext()
        page = await context.newPage()
        global.page = page
    })
    
    afterEach(async () => {
        page.close()
    })

    test('Do login with success', async () => {
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);
        const myAccountPage = new MyAccountPage(page);

        await homePage.navigate();
        await homePage.clickSignIn();
        await signInPage.login("novoemailteste@gmail.com", "teste123");
        let myAccountHeading = await myAccountPage.getHeading();
        expect(myAccountHeading).toEqual("MY ACCOUNTT");
    });
});
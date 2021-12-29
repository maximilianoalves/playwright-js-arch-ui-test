const HomePage = require('../pages/Home.page');
const MyAccountPage = require('../pages/MyAccount.page');
const SignInPage = require('../pages/SignIn.page');

// Needs to be higher than the default Playwright timeout
jest.setTimeout(30000);

describe('Login', () => {

    it('Do login with success', async () => {
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);
        const myAccountPage = new MyAccountPage(page);


        await homePage.navigate();
        await homePage.clickSignIn();
        await signInPage.login("novoemailteste@gmail.com", "teste123");
        let myAccountHeading = await myAccountPage.getHeading();
        expect(myAccountHeading).toEqual("MY ACCOUNT");
    });
});
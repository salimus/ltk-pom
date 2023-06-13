import HomePage from "../pages/ltk_home_page"
import SignUpPage from "../pages/ltk_sign_up_page";
import DiscoverPage from "../pages/ltk_discover_page";

describe('Sign Up Test', () => {
    const homePage = new HomePage();
    const signUpPage = new SignUpPage();
    const discoverPage = new DiscoverPage();

    it('Should sign up as a new user and verify redirection to the Discover home page', () => {
        // Visits shopltk.com, verifies page title and clicks on Sign Up button
        homePage.visit();
        homePage.verifyHomePageTitle();
        homePage.clickSignUpButton();

        // Verifies Sign Up page title, types random email and clicks on continue button
        signUpPage.verifySignUpPageTitle()
        signUpPage.typeEmail()
        signUpPage.continueButton()

        // Types password and click on the Sign Up button
        signUpPage.typePassword()
        signUpPage.signUpButton()

        // Verifies Discover page URL, title and user name
        discoverPage.discoverPageURL()
        discoverPage.discoverPageTitle()
        discoverPage.userMenu()
    })
})
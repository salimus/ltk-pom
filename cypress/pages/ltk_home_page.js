class HomePage {
    visit() {
        cy.visit('https://www.shopltk.com');
    }

    verifyHomePageTitle() {
        cy.title().should('eq', 'LTK | Fashion, Home, Beauty, Fitness and More')
    }
  
    clickSignUpButton() {
        // Click on the Sign Up button
        cy.get('a[href="/signup"]').click();
    }
}

export default HomePage;
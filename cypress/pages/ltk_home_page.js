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


  
    // fillSignUpForm(email, password, firstName, lastName) {
    //     cy.get('input[name="email"]').type(email);
    //     cy.get('input[name="password"]').type(password);
    //     cy.get('input[name="firstName"]').type(firstName);
    //     cy.get('input[name="lastName"]').type(lastName);
    // }
  
    // submitSignUpForm() {
    //     cy.get('.signup-form__button').click();
    // }
}

export default HomePage;
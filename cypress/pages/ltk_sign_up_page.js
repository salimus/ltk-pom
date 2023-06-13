class SignUpPage {
  
    verifySignUpPageTitle() {
        cy.title().should('eq', 'Sign Up for an LTK Account | LTK')
    }

    typeEmail() {
        let random = Math.ceil(Math.random()) + Math.random()
        cy.get('#input-15').type('ltk' + random + '@yopmail.com');
    }

    continueButton() {
        cy.get('span[class="v-btn__content"]').find('span').contains('continue').click();
    }

    typePassword(){
        cy.get('#input-34').type('password123');
    }

    signUpButton(){
        cy.get('span[class="v-btn__content"]').find('span').contains('sign up to begin shopping').click();
    }
}

export default SignUpPage;
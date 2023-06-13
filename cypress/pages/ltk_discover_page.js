class DiscoverPage {
    
    discoverPageURL(){
        cy.url().should('include', '/home/for-you');
    }

    discoverPageTitle(){
        cy.title().should('eq', 'Discover content from our community of Creators | LTK')
    }

    userMenu(){
        cy.get('.ltk-header__user-menu').should('be.visible');
    }
}

export default DiscoverPage;  
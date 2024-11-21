describe ('Login to the app', function(){
    it('Login to the app by visiting', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
    });
});
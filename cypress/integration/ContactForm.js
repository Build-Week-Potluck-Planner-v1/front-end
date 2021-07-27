const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const submitBtn = () => cy.get('button[name="submit"]')
const clearBtn = () => cy.get('button[name="clear"]')
const messageInput = () => cy.get('textarea[name="message"]')


describe('Contact Form App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')

    })

    it('check that elements are showing',()=>{
        nameInput().should('exist')
        emailInput().should('exist')
        submitBtn().should('exist')
        clearBtn().should('exist')
        messageInput().should('exist')
    })

    it('check that text can be written',()=>{
        nameInput()
            .should('have.value','')
            .type('Testing the name input')
            .should('have.value','Testing the name input')
        
        emailInput()
            .should('have.value','')
            .type('fakeEmail@email.com')
            .should('have.value','fakeEmail@email.com')

        messageInput()
            .should('have.value','')
            .type('This is a fake message to test the functionality of the message input')
            .should('have.value','This is a fake message to test the functionality of the message input')
    })

    it('check that clear button works properly',()=>{
        nameInput()
        .should('have.value','')
        .type('Testing the name input')
        .should('have.value','Testing the name input')
    
    emailInput()
        .should('have.value','')
        .type('fakeEmail@email.com')
        .should('have.value','fakeEmail@email.com')

    messageInput()
        .should('have.value','')
        .type('This is a fake message to test the functionality of the message input')
        .should('have.value','This is a fake message to test the functionality of the message input')

    clearBtn().click()
    })

    it('check that submit button works properly',()=>{
        nameInput()
        .should('have.value','')
        .type('Testing the name input')
        .should('have.value','Testing the name input')
    
    emailInput()
        .should('have.value','')
        .type('fakeEmail@email.com')
        .should('have.value','fakeEmail@email.com')

    messageInput()
        .should('have.value','')
        .type('This is a fake message to test the functionality of the message input')
        .should('have.value','This is a fake message to test the functionality of the message input')

    submitBtn().click()
    })


})
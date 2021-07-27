const nameInput = () => cy.get('input[name="username"]')
const passwordInput = () => cy.get('input[name="password"]')
const submitBtn = () => cy.get('button')


describe('Signup App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')

    })

    it('check that elements are showing',()=>{
        nameInput().should('exist')
        passwordInput().should('exist')
        submitBtn().should('exist')
    })

    it('check that text can be written',()=>{
        nameInput()
            .should('have.value','')
            .type('Testing the name input')
            .should('have.value','Testing the name input')
        
        passwordInput()
            .should('have.value','')
            .type('ThisIsATestPassword1234!')
            .should('have.value','ThisIsATestPassword1234!')
    })

    it('check that submit button can be clicked',()=>{
        nameInput()
        .should('have.value','')
        .type('Testing the name input')
        .should('have.value','Testing the name input')
    
    passwordInput()
        .should('have.value','')
        .type('ThisIsATestPassword1234!')
        .should('have.value','ThisIsATestPassword1234!')

    submitBtn().click()
    })


})


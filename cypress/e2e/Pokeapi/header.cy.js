

describe('TEST Header',()=>{
    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it("Get Respone Body", () => {
        var poke ={
            "name": "limber"
        }
        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto',poke).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.eq(poke.name)
        })
    });
 
})
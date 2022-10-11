describe('MATERI VALIDATE CONTENT',()=>{
        it('Validate Content', () => {
            cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
            cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
        });
        it("TUGAS", () => {
            var poke ={
                "name":"limber"
            }
            cy.request('GET','https://pokeapi.co/api/v2/ability', poke).then((response)=>{
                expect(response.status).equal(200)
                expect(response.body.results[6].name).to.eq(poke.name)
            })
        });
})
// x.abilities[0].ability.name

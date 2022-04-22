import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
   const myPokemon = new Pokemon('Pikachu')
   //expect(myPokemon.name).toBe('Pikachussssssss'); // Corrige esta prueba esta truena porque lo que espero es pikachu
   expect(myPokemon.name).toBe('Pikachu');
  //expect(4+2).toBe(10);

});
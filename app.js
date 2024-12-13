const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: [ 'Easy', 'Med', 'Hard'],
  }
// exercise 1
    console.log(pokemon[58])

// exercise 2
  console.log(game)

// exercise 3
  console.log('difficulty:', game.difficulty[1])

// exercise 4
game.party.push(pokemon[4]);
console.log('Result of exercise 4;', game.party)

// exercise 5
game.party.push(pokemon[2], pokemon[3], pokemon[5]);
console.log('Result of exercise 5;', game.party);

// exercise 6
game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});

console.log('Result of exercise 6:', game.gyms)

// exercise 7
const evolvedPokemon = { name: "Ivysaur", type: "Grass", starter: false };
game.party.splice(0, 1, evolvedPokemon); 

console.log('Result of exercise 7:', game.party); 


// exercise 8
game.party.forEach(pokemon => console.log('Result of exercise 8:', pokemon.name));

// exercise 9
const starterPokemonList = pokemon.filter(pokemon => pokemon.starter === true);
starterPokemonList.forEach(pokemon => console.log('Result of exercise 9:', pokemon.name))

// exercise 10
game.catchPokemon = function (pokemonObj){
    game.party.push(pokemonObj); // In this line instead of 'game' can I use 'this'? Just wondering.
}
console.log('Result of exercise 10:', game.party)

// exercise 11
game.catchPokemon = function (pokemonObj){
    game.party.push(pokemonObj); // In this line instead of 'game' can I use 'this'? Just wondering.


}

// exercise 12
game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
})

console.log('Result of exercise 12:', game.gyms)
// exercise 13
game.gymStatus = function () 
     gymTally = {
        completed: 0,
        incomplete: 0
    }
    game.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed += 1;
        } else {
            gymTally.incomplete += 1; 
        }
    })

    console.log('Result of execise 13:', gymTally)

// exercise 14
game.partyCount = function () {
    return game.party.length;
}
console.log("Result of exercise 14:", game.partyCount())

// exercise 15
game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
})

// exercise 16
console.log(game)
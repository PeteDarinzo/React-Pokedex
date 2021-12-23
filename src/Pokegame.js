import React from 'react';
import Pokedex from './Pokedex';

const DEFAULTS = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]

// Fisher Yates shuffle algorithm
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}


const Pokegame = ({ pokemon = DEFAULTS }) => {
  // shuffle and deal pokemon into two hands
  let deckOne = [];
  let deckTwo = [];
  let shuffledPokemon = shuffle(pokemon);
  for (let i = 0; i < 4; i++) {
    deckOne.push(shuffledPokemon[i]);
    deckTwo.push(shuffledPokemon[i + 4]);
  }

  // calculate total exp for each hand
  let deckOneExp = 0;
  let deckTwoExp = 0;

  for (let i = 0; i < 4; i++) {
    deckOneExp += deckOne[i].base_experience;
    deckTwoExp += deckTwo[i].base_experience;
  }

  let deckOneWinner = false;
  let deckTwoWinner = false;

  (deckOneExp > deckTwoExp) ? deckOneWinner = true : deckTwoWinner = true;

  return (
    <div>
      <Pokedex pokemon={deckOne}
        totalExp={deckOneExp}
        isWinner={deckOneWinner} />
      <Pokedex pokemon={deckTwo}
        totalExp={deckTwoExp}
        isWinner={deckTwoWinner} />
    </div>
  )
}

export default Pokegame;
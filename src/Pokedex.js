import React from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css'



const Pokedex = ({ pokemon, totalExp, isWinner }) => (
  <>
    <h1 className="Pokedex-header">Pokedex</h1>
    <div className="Pokedex">
      <div>
        <p className="Pokedex-win">Total Exp: {totalExp}</p>
        <p className="Pokedex-win"><b>{isWinner ? "THIS DECK WINS!!!" : ""}</b></p>
      </div>
      {pokemon.map(p => (
        <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
      ))}
    </div>
  </>
);

export default Pokedex;
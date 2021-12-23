import React from "react";
import './Pokecard.css';

const Pokecard = ({ name, id, type, base_experience }) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img src={imgURL} className="Pokecard-image"></img>
      <p><b>Type:</b> {type}</p>
      <p><b>Exp:</b> {base_experience}</p>
    </div>
  );
}

export default Pokecard;
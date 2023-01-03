import "./Pokemon.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./Form";
import Pokemoncards from "./Pokemoncards";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [pokemonNames, setPokemonNames]= useState([]);
  useEffect (() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then((res) => {
      const arr = res.data.results.map((name)=>{
        return name.name
        
      })
      setPokemonNames(arr);
      
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  // console.log(pokemonNames);
  
  const fetchPokemon = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => console.log(err));
  };

  const changeValue = (e) => setInputValue(e.target.value);
  const pokemonToArr = Object.entries(pokemon);

  return (
    <div className="container">
      <Form input={inputValue} fetch={fetchPokemon} value={changeValue} pokemonName={pokemonNames}/>
      {pokemonToArr.length > 0 && (
        <Pokemoncards
        name={pokemon.species.name}
        type={pokemon.types[0].type.name}
        link={pokemon.sprites.front_default}
        text={pokemon.species.name}
        stats={pokemon.stats}
        abilities={pokemon.abilities}
        />
        )}
    </div>
  );
};

export default Pokemon;

import './App.css';
import pokedexLogo from './assets/images/pokedex-project.png';
import defaultImage from './assets/images/who-is-that-pokemon.png';
import ScreenPokedex from "./components/ScreenPokedex";
import AttributePokemon from './components/AttributePokemon';
import AttributePokemonSpecial from './components/AttributePokemonSpecial';
import PokemonService from './api/PokemonService';
import { useState, useEffect } from 'react';
import ResponseCode from './api/utils/ResponseCode';
import { OpenModal, Modal } from './components/Modal';
import Types from './api/utils/Types';

const App = () => {

  let pokemonSpecs = {
    weight: 0,
    urlImage: '',
    height: 0,
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      'special-attack': 0,
      'special-defense': 0,
    },
    type: '?',
  };

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState({});
  const [dataPokemon, setDataPokemon] = useState(pokemonSpecs);
  const [msgValidation, setMsgValidation] = useState("");

  const onSubmit = async () => {
    const data = await PokemonService.getPokemonByName(pokemonName);

    if (data.problem === null || data.problem === ResponseCode.CLIENT_ERROR) {
      // TODO: manage the error w/ dispatch
      setMsgValidation(ResponseCode.CLIENT_ERROR.message)
      OpenModal();
      console.error('Ha ocurrido un error', data);
      return;
    }

    let pokemonCompleteSpecs = {
      height: data.height,
      weight: data.weight,
      type: (data.types[0].type.name).toUpperCase(),
      urlImage: data.sprites.other["official-artwork"].front_default,
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        "special-attack": data.stats[3].base_stat,
        "special-defense": data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      }
    }

    setPokemonType(determinateColorByType((data.types[0].type.name).toUpperCase()));
    setDataPokemon(pokemonCompleteSpecs);
  }

  useEffect(() => {
  }, [dataPokemon, pokemonName]);

  // Manejando los eventos de teclado
  const handleChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
    // console.log('key logger: ', event.target.value);
  }

  const determinateColorByType = (type) => {
        
    for (const key in Types) {
        if(key === type){
          return {
            bgColor: Types[key].bgColor,
            textColor: Types[key].textColor,
          }
        }
    }
}

  return (
    <>
      <div className="flex justify-center items-center bg-red-pokemon h-auto">
        <img alt="pokedex-logo" className="w-auto h-24 flex" src={pokedexLogo} />
      </div>

      <div className="flex justify-center bg-blue-pokemon h-auto w-auto">
        <div className="bg-red-pokedex-pokemon border-black h-auto w-auto rounded-lg my-32">
          <div className="flex mx-4 mt-6">
            <button
              className="flex bg-blue-light-pokemon hover:bg-blue-pokemon text-xl btn btn-primary rounded-0 text-black hover:text-yellow-pokemon mx-2"
              type="submit"
              onClick={onSubmit}
            >
              Buscar
            </button>
            <input
              name="pokemonName"
              type="text"
              placeholder="Pokemon name"
              onChange={handleChange}
              value={pokemonName}
              className="flex bg-gray-pokemon shadow appearance-none border rounded py-1 px-3 
                           leading-tight focus:bg-white focus:border-blue-500 text-gray-600 
                           focus:outline-none focus:shadow-outline"
            />
          </div>
          <ScreenPokedex imagePokemon={dataPokemon.urlImage !== '' ? dataPokemon.urlImage : defaultImage} />
        </div>

        <div className="bg-red-pokemon h-72 w-2 rounded-sm my-52"></div>

        <div className="bg-red-pokedex-pokemon h-auto w-auto rounded-lg my-48">
          <div className=" bg-gray-pokemon h-auto w-auto rounded-lg mx-4 mt-4">

            <div className="flex">
              <AttributePokemon label={'HP:'} count={dataPokemon.stats.hp} />
              <AttributePokemon label={'Weight:'} count={dataPokemon.weight} />
            </div>

            <div className="flex">

              <AttributePokemonSpecial
                label={'Type:'}
                colorPill={pokemonType.bgColor}
                colorLabel={pokemonType.textColor}
                value={dataPokemon.type}
              />

              <AttributePokemon label={'Speed:'} count={dataPokemon.stats.speed} />
            </div>

            <div className="flex">
              <AttributePokemon label={'Attack:'} count={dataPokemon.stats.attack} />
              <AttributePokemon label={'Defense:'} count={dataPokemon.stats.defense} />
            </div>

            <div className="flex">
              <AttributePokemon label={'Special Attack:'} count={dataPokemon.stats['special-attack']} />
              <AttributePokemon label={'Special Defense:'} count={dataPokemon.stats['special-defense']} />
            </div>
          </div>
        </div>

      </div>
      <Modal msgValidation={msgValidation} />
    </>
  )
}

export default App;

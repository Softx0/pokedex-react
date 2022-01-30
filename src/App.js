import pokedexLogo from './assets/images/pokedex-project.png';
import defaultImage from './assets/images/who-is-that-pokemon.png';
import ScreenPokedex from "./components/ScreenPokedex";
import AttributePokemon from './components/AttributePokemon';
import AttributePokemonSpecial from './components/AttributePokemonSpecial';
import PokemonService from './api/PokemonService';
import { useState, useEffect } from 'react';
import ResponseCode from './api/utils/ResponseCode';
import { OpenModal, Modal } from './components/Modal';
import Constants from './utils/Constants';

const App = () => {

  let pokemonSpecs = {
    id: 0,
    name: `Who's that pokemon?`,
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
    type: '???',
  };

  const initialStatePokemonColorType = [Constants.BG_COLOR_DEFAULT.default];
  const initialStatePokemonType = ["INDETERMINATE","INDETERMINATE"];

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonColorType] = useState(initialStatePokemonColorType);
  const [pokemonTypes, setPokemonTypes] = useState(initialStatePokemonType);
  const [dataPokemon, setDataPokemon] = useState(pokemonSpecs);
  const [msgValidation, setMsgValidation] = useState("");

  const onSubmit = async () => {
    const data = await PokemonService.getPokemonByName(pokemonName);

    if (data.problem === null || data.problem === ResponseCode.CLIENT_ERROR) {
      // TODO: manage the error w/ dispatch
      setMsgValidation(ResponseCode.CLIENT_ERROR.message);
      setDataPokemon(pokemonSpecs);
      OpenModal();
      return;
    }

    pokemonSpecs = {
      id: data.id,
      name: data.forms[0].name,
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

    setPokemonTypes(typesOfThePokemon(data));
    // setPokemonColorType(determinateColorByTypes(typesOfThePokemon(data)));
    setDataPokemon(pokemonSpecs);
  }

  useEffect(() => {
  }, [dataPokemon, pokemonName, pokemonColorType, pokemonTypes]);

  // Manejando los eventos de teclado
  const handleChange = (event) => setPokemonName(event.target.value.toLowerCase());
  

  let typesOfThePokemon = (data) => {
    let arrayTypes = data.types.map(element => {
      return element.type.name;
    });
    // console.log(`Los tipos en base al pokemon: ${arrayTypes}`);
    return arrayTypes;
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
          <ScreenPokedex imagePokemon={dataPokemon.urlImage !== '' ? dataPokemon.urlImage : defaultImage}
            idPokemon={dataPokemon.id}
            namePokemon={dataPokemon.name}
          />
        </div>

        <div className="bg-red-pokemon h-72 w-2 rounded-sm my-52"></div>

        <div className="bg-red-pokedex-pokemon h-auto w-auto rounded-lg my-48">
          <div className=" bg-gray-pokemon h-auto w-auto rounded-lg mx-4 mt-4">

            <div className="flex">
              <AttributePokemon label={'HP:'} count={dataPokemon.stats.hp} />
              <AttributePokemon label={'Weight:'} count={dataPokemon.weight} />
            </div>

            <div className="flex">

               {/* TODO: iterate the types and determinate the colors inside the component */}
              <AttributePokemonSpecial
                label={'Type:'}
                colorPill={pokemonColorType[0]}
                colorLabel={'text-white'}
                pokemonTypes={pokemonTypes}
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

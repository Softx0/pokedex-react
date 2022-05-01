import pokedexLogo from "./assets/images/pokedex-project.png";
import defaultImage from "./assets/images/who-is-that-pokemon.png";
import ScreenPokedex from "./components/ScreenPokedex";
import AttributePokemon from "./components/AttributePokemon";
import AttributePokemonSpecial from "./components/AttributePokemonSpecial";
import PokemonService from "./api/PokemonService";
import { useState, useEffect } from "react";
import ResponseCode from "./api/utils/ResponseCode";
import { OpenModal, Modal } from "./components/Modal";
import Constants from "./utils/Constants";
import AttributePokemonWeaknessStrength from "./components/AttributePokemonWeaknessStrength";

const App = () => {

  let pokemonSpecs = {
    id: 0,
    name: `Who's that pokemon?`,
    weight: 0,
    urlImage: "",
    height: 0,
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      "special-attack": 0,
      "special-defense": 0,
    },
    type: "???",
  };

  const initialStatePokemonColorType = [Constants.BG_COLOR_DEFAULT.default];
  const initialStatePokemonType = ["?"];

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonColorType] = useState(initialStatePokemonColorType);
  const [pokemonTypes, setPokemonTypes] = useState(initialStatePokemonType);

  const [pokemonDoubleWeakness, setPokemonDoubleWeakness] = useState(["?"]);
  const [pokemonHalfWeakness, setPokemonHalfWeakness] = useState(["?"]);
  const [pokemonNoWeakness, setPokemonNoWeakness] = useState(["?"]);

  const [pokemonDoubleStrength, setPokemonDoubleStrength] = useState(["?"]);
  const [pokemonHalfStrength, setPokemonHalfStrength] = useState(["?"]);
  const [pokemonNoStrength, setPokemonNoStrength] = useState(["?"]);

  const [pokemonType, setPokemonType] = useState([]);
  const [dataPokemon, setDataPokemon] = useState(pokemonSpecs);
  const [msgValidation, setMsgValidation] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await PokemonService.getPokemonByName(pokemonName);

    if (data.problem === null || data.problem === ResponseCode.CLIENT_ERROR) {
      // TODO: manage the error w/ dispatch
      setMsgValidation(ResponseCode.CLIENT_ERROR.message);
      setDataPokemon(pokemonSpecs);
      setPokemonTypes(initialStatePokemonType);

      setPokemonDoubleStrength(["?"]);
      setPokemonHalfStrength(["?"]);
      setPokemonNoStrength(["?"]);
      setPokemonDoubleWeakness(["?"]);
      setPokemonHalfWeakness(["?"]);
      setPokemonNoWeakness(["?"]);

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
    setDataPokemon(pokemonSpecs);
    obtainStrengthAndWeaknessFromType(typesOfThePokemon(data));
  }

  useEffect(() => {
  }, [dataPokemon, pokemonName, pokemonColorType, pokemonTypes]);

  // Manejando los eventos de teclado
  const handleChange = (event) => setPokemonName(event.target.value.toLowerCase());

  let typesOfThePokemon = (data) => {
    let arrayTypes = data.types.map(element => {
      return element.type.name;
    });
    return arrayTypes;
  }

  let obtainStrengthAndWeaknessFromType = async (pokemonTypes) => {

    let data = '';
    for (let iterator of pokemonTypes) {
      data = await PokemonService.getTypePokemon(iterator);
      setPokemonType(data);
    }

    if (data.problem === null || data.problem === ResponseCode.TYPES_ERROR) {
      // TODO: manage the error w/ dispatch
      setMsgValidation(ResponseCode.TYPES_ERROR.message);

      setPokemonDoubleStrength(["?"]);
      setPokemonHalfStrength(["?"]);
      setPokemonNoStrength(["?"]);

      setPokemonDoubleWeakness(["?"]);
      setPokemonHalfWeakness(["?"]);
      setPokemonNoWeakness(["?"]);

      setPokemonType("");

      OpenModal();
      return;
    }

    analyzeWeakness(data.damage_relations.double_damage_from,
      data.damage_relations.half_damage_from,
      data.damage_relations.no_damage_from);

    analyzeStrength(data.damage_relations.double_damage_to,
      data.damage_relations.half_damage_to,
      data.damage_relations.no_damage_to);
  }

  let analyzeWeakness = (doubleDamageFrom, halfDamageFrom, noDamageFrom) => {
    let doubleDamageFromByTypes = doubleDamageFrom.map(elements => {
      return elements.name;
    });
    setPokemonDoubleWeakness(doubleDamageFromByTypes);

    let halfDamageFromByTypes = halfDamageFrom.map(elements => {
      return elements.name;
    });
    setPokemonHalfWeakness(halfDamageFromByTypes);

    let noDamageFromByTypes = noDamageFrom.map(elements => {
      return elements.name;
    });
    setPokemonNoWeakness(noDamageFromByTypes);
  }

  let analyzeStrength = (doubleDamageTo, halfDamageTo, noDamageTo) => {
    let doubleDamageToByTypes = doubleDamageTo.map(elements => {
      return elements.name;
    });
    setPokemonDoubleStrength(doubleDamageToByTypes);

    let halfDamageToByTypes = halfDamageTo.map(elements => {
      return elements.name;
    });
    setPokemonHalfStrength(halfDamageToByTypes);

    let noDamageToByTypes = noDamageTo.map(elements => {
      return elements.name;
    });
    setPokemonNoStrength(noDamageToByTypes);
  }

  return (
    <>
      <div className="flex justify-center items-center bg-red-pokemon h-auto">
        <img alt="pokedex-logo" className="w-auto h-24 flex" src={pokedexLogo} />
      </div>

      <div className="flex justify-center bg-blue-pokemon h-auto w-auto">
        <div className="bg-red-pokedex-pokemon border-black h-auto w-auto rounded-lg my-44">
          <form onSubmit={onSubmit} >
            <div className="flex mx-4 mt-6">
              <button
                id="buscar"
                className="flex bg-blue-light-pokemon hover:bg-blue-pokemon text-xl btn btn-primary rounded-0 text-black hover:text-yellow-pokemon mx-2"
                type="submit"
              >
                Buscar
              </button>
              <input
                id="pokemonName"
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
          </form>
          <ScreenPokedex imagePokemon={dataPokemon.urlImage !== "" ? dataPokemon.urlImage : defaultImage}
            idPokemon={dataPokemon.id}
            namePokemon={dataPokemon.name}
          />

          <div className="flex">

            <div className="bg-slate-800 m-4 w-12 h-8 rounded-full shadow-lg shadow-slate-700/50 border-l-4 border-b-4 border-l-black border-b-black"></div>

            <div className="bg-red-800 mt-6 rounded-full h-3 w-1/4 shadow-lg shadow-red-800/50"></div>

            <div className="bg-blue-800 mt-6 mx-4 rounded-full h-3 w-1/4 shadow-lg shadow-blue-800/50"></div>

            <div className="border-2 rounded-full h-6 w-6 absolute border-gray-700 ml-m-264 mt-11"></div>

            <div className="w-1/2 m-3">

              <div className="flex flex-col ml-10">
                <div className="bg-slate-800 w-8 h-7 rounded-t-md shadow-md shadow-black border-l-4 border-l-slate-900">
                  <a
                    className="bg-gradient-to-t active:from-slate-900 active:to-slate-900 focus-visible:ring 
                                outline-none transition duration-100 px-4 py-1 rounded">
                  </a>
                </div>
              </div>

              <div className="flex flex-row ml-3">
                <div className="">
                  <div className="bg-slate-800 w-8 h-8 rounded-l-md shadow-lg shadow-black border-l-4 border-l-slate-900 border-t-4 border-t-slate-900">
                    <a
                      className="bg-gradient-to-l active:from-slate-900 active:to-slate-900 focus-visible:ring 
                                  outline-none transition duration-100 px-4 pt-1 pb-3 rounded">
                    </a>
                  </div>
                </div>

                <div className="bg-slate-800 w-14 h-8 rounded-r-md shadow-md shadow-black">
                  <div className="bg-slate-800 w-8 h-8 ml-6 rounded-r-md border-b-4 border-b-slate-900">
                    <a
                      className="bg-gradient-to-r active:from-slate-900 active:to-slate-900 focus-visible:ring 
                                  outline-none transition duration-100 px-4 pt-1 pb-3 ml-3 rounded">
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-10">
                <div className="bg-slate-800 w-8 h-7 rounded-b-md shadow-xl shadow-black border-l-4 border-l-slate-900 border-b-4 border-b-slate-900">
                  <a
                    className="bg-gradient-to-t active:from-black active:to-slate-900 focus-visible:ring 
                                outline-none transition duration-100 px-4 py-2 rounded">
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="bg-red-pokemon h-96 w-2 rounded-sm my-80"></div>

        {/* Seccion correspondiente al lado derecho del Pokedex */}
        <div className="bg-red-pokedex-pokemon h-auto w-auto rounded-lg my-40">
          <div className=" bg-gray-pokemon h-auto w-auto rounded-lg mx-6 mt-4">

            <div className="flex">
              <AttributePokemon label={"HP"} count={dataPokemon.stats.hp} />
              <AttributePokemon label={"Weight"} count={dataPokemon.weight} />
              <AttributePokemon label={"Speed"} count={dataPokemon.stats.attack} />
              <AttributePokemon label={"Attack"} count={dataPokemon.stats.attack} />
              <AttributePokemon label={"Defense"} count={dataPokemon.stats.defense} />
            </div>

            <div className="flex">
              <AttributePokemonSpecial
                label={"Type:"}
                colorPill={pokemonColorType[0]}
                colorLabel={"text-white"}
                pokemonTypes={pokemonTypes}
              />
            </div>

            <div className="flex">

              <AttributePokemonWeaknessStrength
                label={"Strength 2x:"}
                colorPill={pokemonColorType[0]}
                colorLabel={"text-white"}
                pokemonTypes={pokemonDoubleStrength}
              />
            </div>

            <div className="flex">
              <AttributePokemonWeaknessStrength
                label={"Weakness 2x:"}
                colorPill={pokemonColorType[0]}
                colorLabel={"text-white"}
                pokemonTypes={pokemonDoubleWeakness}
              />
            </div>

            <div className="flex">

              <AttributePokemonWeaknessStrength
                label={"Strength 1/2x:"}
                colorPill={pokemonColorType[0]}
                colorLabel={"text-white"}
                pokemonTypes={pokemonHalfStrength}
              />
            </div>

            <div className="flex">
              <AttributePokemonWeaknessStrength
                label={"Weakness 1/2x:"}
                colorPill={pokemonColorType[0]}
                colorLabel={"text-white"}
                pokemonTypes={pokemonHalfWeakness}
              />
            </div>

            <div className="flex">
              <AttributePokemonWeaknessStrength
                label={"Strength 0x:"}
                colorPill={pokemonColorType[0]}
                colorLabel={"text-white"}
                pokemonTypes={pokemonNoStrength}
              />
            </div>

            <div className="flex">
              <AttributePokemonWeaknessStrength
                label={"Weakness 0x:"}
                colorPill={pokemonColorType[0]}
                colorLabel={"text-white"}
                pokemonTypes={pokemonNoWeakness}
              />
            </div>
          </div>

          <div className="grid grid-cols-5 h-20 w-25 mx-6 mt-4">
            <div className="bg-blue-400 rounded-tl-md shadow-md shadow-blue-500 border-l-8 border-l-blue-500 border-b-2 border-b-black border-r-2 border-r-black"></div>
            <div className="bg-blue-400 rounded-sm shadow-md shadow-blue-400/50 border-b-2 border-r-2 border-black"></div>
            <div className="bg-blue-400 rounded-sm shadow-md shadow-blue-400/50 border-b-2 border-r-2 border-black"></div>
            <div className="bg-blue-400 rounded-sm shadow-md shadow-blue-400/50 border-b-2 border-r-2 border-black"></div>
            <div className="bg-blue-400 rounded-sm rounded-tr-md shadow-md shadow-blue-400/50 border-b-2 border-black"></div>

            <div className="bg-blue-400 rounded-bl-md shadow-md shadow-blue-400/50 border-l-8 border-b-8 border-blue-500 border-r-2 border-r-black"></div>
            <div className="bg-blue-400 rounded-sm shadow-md shadow-blue-400/50 border-b-8 border-b-blue-500 border-r-2 border-r-black"></div>
            <div className="bg-blue-400 rounded-sm shadow-md shadow-blue-400/50 border-b-8 border-b-blue-500 border-r-2 border-r-black"></div>
            <div className="bg-blue-400 rounded-sm shadow-md shadow-blue-400/50 border-b-8 border-b-blue-500 border-r-2 border-r-black"></div>
            <div className="bg-blue-400 rounded-sm rounded-br-md shadow-md shadow-blue-400/50 border-b-8 border-b-blue-500"></div>
          </div>

          <div className="flex place-content-end">
            <div class="rounded-full bg-slate-700 py-2 my-4 mr-2 w-16 "></div>
            <div class="rounded-full bg-slate-700 py-2 my-4 mr-2 w-16"></div>
          </div>

          <div className="flex ml-6 mb-2">
            <div className="bg-white py-6 px-8 rounded-tl-md rounded-bl-md border-b-gray-400 border-b-4 border-l-gray-400 border-l-4 border-r-2 border-r-black"></div>
            <div className="bg-white py-6 px-8 rounded-tr-md rounded-br-md border-b-gray-400 border-b-4"></div>
          </div>
        </div>

      </div>
      <Modal msgValidation={msgValidation} />
    </>
  )
}

export default App;

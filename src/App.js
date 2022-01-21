import './App.css';
import pokedexLogo from './assets/images/pokedex-project.png';
import charizardImage from './assets/images/Charizard.png';
import ScreenPokedex from "./components/ScreenPokedex";
import AttributePokemon from './components/AttributePokemon';
import AttributePokemonSpecial from './components/AttributePokemonSpecial';

const App = () => {



  return (
    <div className=''>

      <div className="flex justify-center items-center bg-red-pokemon h-auto">
        <img alt="pokedex-logo" className="w-auto h-24 flex" src={pokedexLogo} />
      </div>

      <div className="flex justify-center bg-blue-pokemon h-auto w-auto">

        <div className="bg-red-pokedex-pokemon border-black h-auto w-auto rounded-lg my-32">
          <div className="flex mx-4 mt-6">
            <label className="flex text-xl text-yellow-pokemon mx-2">Buscar</label>
            <input className="flex bg-gray-pokemon shadow appearance-none border rounded py-1 px-3 
                           leading-tight focus:bg-white focus:border-blue-500 text-gray-600 
                           focus:outline-none focus:shadow-outline" type="text" placeholder="pokemon" />
          </div>

          <ScreenPokedex imagePokemon={charizardImage} />

        </div>

        <div className="bg-red-pokemon h-72 w-2 rounded-sm my-52"></div>

        <div className="bg-red-pokedex-pokemon h-auto w-auto rounded-lg my-48">
          <div className=" bg-gray-pokemon h-auto w-auto rounded-lg mx-4 mt-4">

            <div className="flex">
              <AttributePokemon label={'HP:'} count={'200'} />
              <AttributePokemon label={'Peso:'} count={'200 kg'} />
            </div>

            <div className="flex">

              <AttributePokemonSpecial
                label={'Tipo:'}
                colorPill={'bg-red-800'}
                colorLabel={'text-yellow-pokemon'}
                value={'Fuego'}
              />

              <AttributePokemonSpecial
                label={'Debilidad:'}
                colorPill={'bg-gray-500'}
                colorLabel={'text-white'}
                value={'Volador'}
              />
            </div>

            <div className="flex">
              <AttributePokemon label={'Ataque:'} count={'200pts'} />
              <AttributePokemon label={'Ataque:'} count={'200pts'} />
            </div>

            <div className="flex">
              <AttributePokemon label={'Ataque:'} count={'200pts'} />
              <AttributePokemon label={'Ataque:'} count={'200pts'} />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default App;

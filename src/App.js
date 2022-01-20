import './App.css';
import pokedexLogo from './assets/images/pokedex-project.png';
import charizardImage from './assets/images/Charizard.png';
import ScreenPokedex from "./components/ScreenPokedex";

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
              <div className="flex bg-gray-900 h-10 rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon m-2">HP:</label>
                <label className="flex text-sm text-yellow-pokemon m-2">78</label>
              </div>
              <div className="flex bg-gray-900 h-10 rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon rounded-lg m-2">Peso:</label>
                <label className="flex text-sm text-yellow-pokemon m-2">905 kg</label>
              </div>
            </div>
            <div className="flex">
              <div className="flex bg-gray-900 h-10 w-auto rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon rounded-lg m-2">Tipo:</label>
                <div className="flex bg-red-800 h-auto w-auto rounded-md m-2">
                  <label className="flex text-sm text-yellow-pokemon">Fuego</label>
                </div>

              </div>
              <div className="flex bg-gray-900 h-10 w-auto rounded-md  m-2">
                <label className="flex text-sm text-yellow-pokemon rounded-lg m-2">Debilidad:</label>
                <div className="flex bg-gray-500 h-auto w-auto rounded-md m-2">
                  <label className="flex text-sm text-white">Volador</label>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex bg-gray-900 h-10 w-auto rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon rounded-lg m-2">Ataque:</label>
                <label className="flex text-sm text-yellow-pokemon m-2">200 pts</label>

              </div>
              <div className="flex bg-gray-900 h-10 w-auto rounded-md  m-2">
                <label className="flex text-sm text-yellow-pokemon rounded-lg m-2">Velocidad:</label>
                <label className="flex text-sm text-yellow-pokemon m-2">100 pts</label>
              </div>
            </div>

            <div className="flex">
              <div className="flex bg-gray-900 h-10 w-auto rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon rounded-lg m-2">Defensa:</label>
                <label className="flex text-sm text-yellow-pokemon m-2">78 pts</label>

              </div>
              <div className="flex bg-gray-900 h-10 w-auto rounded-md  m-2">
                <label className="flex text-sm text-yellow-pokemon rounded-lg m-2">Velocidad:</label>
                <label className="flex text-sm text-yellow-pokemon m-2">100 pts</label>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App;

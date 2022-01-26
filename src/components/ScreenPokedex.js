
const ScreenPokedex = ({ imagePokemon, idPokemon, namePokemon }) => {

    return (
        <>
            <div className="flex border-4 border-blue-light-pokemon hover:border-blue-pokemon bg-blue-light-pokemon hover:bg-blue-pokemon 
                                 h-auto w-auto rounded-lg m-6">
                <div>
                    <img alt='pokemonImage' className="flex w-72 h-auto " src={imagePokemon} />
                    <div className="flex justify-center h-auto">
                        <label className="flex text-lg text-white font-bold ">#{idPokemon} - {namePokemon.toUpperCase()}</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScreenPokedex;
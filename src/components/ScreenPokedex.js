
const ScreenPokedex = ({ imagePokemon }) => {

    return (
        <>
            <div className="flex border-4 border-blue-light-pokemon hover:border-blue-pokemon bg-blue-light-pokemon hover:bg-blue-pokemon 
                                 h-auto w-auto rounded-lg m-6">
                <img alt='pokemonImage' className="flex w-72 h-auto " src={imagePokemon} />
            </div>
        </>
    )
}

export default ScreenPokedex;
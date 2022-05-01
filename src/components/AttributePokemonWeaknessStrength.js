import Types from '../api/utils/Types';

const AttributePokemonWeaknessStrength = ({
    label,
    colorPill,
    colorLabel,
    pokemonTypes
}) => {

    const determinateColorByTypes = (arrayPokemonTypes) => {
        return arrayPokemonTypes.map((element, index) => {
            return (
                <>
                    <label key={index}
                        className={`flex text-sm font-bold rounded-sm px-1 m-2 ${colorLabel} 
                              ${Types[element] ? Types[element] : colorPill}`}>
                        {element.toUpperCase()}
                    </label>
                </>
            )
        })
    }

    return (
        <>
            <div className="flex flex-col bg-gray-900 h-auto w-full rounded-md m-2">
                <div className="flex">
                    <label className="flex text-sm text-yellow-pokemon m-2">{label}</label>
                </div>
                <div className="flex">
                    {determinateColorByTypes(pokemonTypes)}
                </div>
            </div>
        </>
    );
}

export default AttributePokemonWeaknessStrength;
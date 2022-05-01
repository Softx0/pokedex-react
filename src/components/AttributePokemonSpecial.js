import Types from '../api/utils/Types';

const AttributePokemonSpecial = ({
    label,
    colorPill,
    colorLabel,
    pokemonTypes
}) => {

    const determinateColorByTypes = (arrayPokemonTypes) => {
        return arrayPokemonTypes.map((element, index) => {
            return (
                <label key={index}
                    className={`flex text-sm font-medium rounded-sm px-1 m-1 ${colorLabel}
                                                                ${Types[element] ? Types[element] : colorPill}`}>
                    {element.toUpperCase()}
                </label>
            )
        })
    }

    return (
        <>
            <div className="flex flex-row bg-gray-900 h-auto w-full rounded-md mx-2 my-1">
                <div className="flex">
                    <label className="flex text-sm text-yellow-pokemon m-1">{label}</label>
                </div>
                <div className="flex">
                    {determinateColorByTypes(pokemonTypes)}
                </div>
            </div>
        </>
    );
}

export default AttributePokemonSpecial;
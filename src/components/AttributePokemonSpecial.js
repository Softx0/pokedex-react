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
                <label key={index} className={`flex text-sm font-bold rounded-sm px-1 py-1 m-2 ${colorLabel} ${Types[element] ? Types[element] : colorPill}`}>
                    {element.toUpperCase()}
                </label>
            )
        })
    }

    return (
        <>
            <div className="flex bg-gray-900 h-auto w-full rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon m-2">{label}</label>
                {determinateColorByTypes(pokemonTypes)}
            </div>
        </>
    );
}

export default AttributePokemonSpecial;
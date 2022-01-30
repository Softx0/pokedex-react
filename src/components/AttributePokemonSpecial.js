import Types from '../api/utils/Types';

const AttributePokemonSpecial = ({
    label,
    colorPill,
    colorLabel,
    pokemonTypes
}) => {

    // Devolviendo el color 
    // const determinateColorByTypes = (arrayPokemonTypes) => {
    //     console.log(arrayPokemonTypes);

    //     let definitiveColors = arrayPokemonTypes.map(element => {
    //         return Types[element];
    //     })
    //     console.log(definitiveColors);

    //     return definitiveColors;
    // }


    const determinateColorByTypesV2 = (arrayPokemonTypes) => {
        return arrayPokemonTypes.map((element, index) => {
            return (
                <div key={index} className={`flex h-auto w-auto rounded-sm px-1 m-2 ${Types[element] ? Types[element] : colorPill}`}>
                    <label className={`flex text-sm font-bold ${colorLabel}`}>
                        {element.toUpperCase()}
                    </label>
                </div>
            )
        })
    }

    return (
        <>
            <div className="flex bg-gray-900 h-auto w-full rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon m-2">{label}</label>
                {determinateColorByTypesV2(pokemonTypes)}
            </div>
        </>
    );
}

export default AttributePokemonSpecial;
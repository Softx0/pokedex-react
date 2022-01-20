import { useState } from "react";

const ScreenPokedex = ({imagePokemon}) => {

    const [pokemon] = useState(imagePokemon);

    return (
        <>
            <div className="flex bg-blue-light-pokemon h-72 w-72 rounded-lg mx-4 mt-7">
                <img alt='charizardImage' className="w-auto h-auto flex" src={pokemon} />
            </div>
        </>
    )
}

export default ScreenPokedex;
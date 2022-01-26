
const AttributePokemonSpecial = ({ 
        label, 
        colorPill, 
        colorLabel, 
        value 
    }) => {

    return (
        <>
            <div className="flex bg-gray-900 h-auto w-full rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon m-2">{label}</label>
                <div className={`flex h-auto w-auto rounded-sm px-1 m-2 ${colorPill}`}>
                    <label className={`flex text-sm font-bold ${colorLabel}`}>{value}</label>
                </div>
            </div>
        </>
    );
}

export default AttributePokemonSpecial;
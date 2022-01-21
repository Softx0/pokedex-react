

const AttributePokemonSpecial = ({ 
        label, 
        colorPill, 
        colorLabel, 
        value 
    }) => {


        
    return (
        <>
            <div className="flex bg-gray-900 h-10 w-auto rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon m-2">{label}</label>
                <div className={`flex h-auto w-auto rounded-md m-2 ${colorPill}`}>
                    <label className={`flex text-sm ${colorLabel}`}>{value}</label>
                </div>
            </div>
        </>
    );
}

export default AttributePokemonSpecial;
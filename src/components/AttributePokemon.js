
const AttributePokemon = ({ label, count }) => {

    return (
        <>
            <div className="flex bg-gray-900 h-10 w-auto rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon m-2">{label}</label>
                <label className="flex text-sm text-yellow-pokemon m-2">{count}</label>
            </div>
        </>
    )
}

export default AttributePokemon
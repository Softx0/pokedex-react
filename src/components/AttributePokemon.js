
const AttributePokemon = ({ label, count }) => {

    return (
        <>
            <div className="flex bg-gray-900 h-auto w-full rounded-md m-2">
                <label className="flex text-sm text-yellow-pokemon m-2">{label}</label>
                <label className="flex text-sm text-yellow-pokemon m-2">{count}</label>
            </div>
        </>
    )
}

export default AttributePokemon
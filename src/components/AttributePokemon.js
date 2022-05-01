const AttributePokemon = ({ label, count }) => {

    return (
        <>
            <div className="grid grid-flow-row gap-1 bg-gray-900 h-auto w-full rounded-md m-2">
                <label className="row-span-2 text-sm font-bold text-yellow-pokemon mx-2 mt-2">{label}</label>
                <label className="row-span-2 text-sm text-center font-light text-yellow-pokemon mx-2 mb-2">{count}</label>
              </div>
        </>
    )
}

export default AttributePokemon
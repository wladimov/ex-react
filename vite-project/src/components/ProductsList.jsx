import { useState } from "react"

const ProductsList = () => {
    const [value, setValue] = useState('')

    const data = [
        { id: 1, label: "", messaje: "" },
        { id: 2, label: "Apple", messaje: "10 in stock" },
        { id: 3, label: "Bannana", messaje: "out of stock" },
        { id: 4, label: "Orange", messaje: "full stock" },
    ]

    function handleSelect(event) {
        setValue(event.target.value)
    }

    return (
        <section className="flex flex-col items-center gap-6 w-full h-48 mt-16 p-2 bg-blue-500/50">
            <h1 className="text-3xl font-bold">List of products</h1>
            <div className="flex justify-center items-center gap-2">
                <div className="">
                    <p>Choose the products</p>
                    <p>{value}</p>
                </div>
                <div className="w-48 h-12">
                    <select
                        className="p-1 bg-blue-600 border-solid border-2 border-sky-500 rounded-lg text-white"
                        onChange={handleSelect}>
                        {
                            data.map(data => (
                                <option value={data.messaje} key={data.id}>
                                    {data.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </section>
    )
}
export default ProductsList


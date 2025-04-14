import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";


const Filters = () => {
    const {
        filterValue, setFilterValue, minPrice, setMinPrice, maxPrice, setMaxPrice,
        setOrderConfig
    } = useContext(ProductContext);

    return (

        <div className="max-h-40 p-3 m-3 bg-white shadow-md z-50">
            <div >
                Filtrar por
                <input
                    value={filterValue}
                    onChange={e => setFilterValue(e.target.value)}
                    className="ml-2 bg-gray-200"
                />
            </div>
            <div className="flex gap-3 mt-3 ">
                <div className="flex flex-col">
                    <label>Preço minimo</label>
                    <div>
                        <input
                            type='number'
                            className="w-full bg-gray-200"
                            value={minPrice}
                            onChange={e => setMinPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col ">
                    <label>Preço máximo</label>
                    <input
                        type='number'
                        className=" bg-gray-200"
                        value={maxPrice}
                        onChange={e => setMaxPrice(e.target.value)}
                    />
                </div>

            </div>
            <div className="block mt-3">
                <label>Ordernar por</label>
                <select
                    className="ml-3"
                    onChange={e => setOrderConfig(e.target.value)}
                >
                    <option value='ascTitle'>A-Z</option>
                    <option value='descTitle'>Z-A</option>
                    <option value='ascPrice'>Menor preço </option>
                    <option value='descPrice'>Maior preço </option>
                </select>
            </div>
        </div>

    )
}

export default Filters;

import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";

interface FiltersProps {
    isFiltersOpen: boolean,
    setIsFiltersOpen: (value: boolean) => void
}

const Filters: React.FC<FiltersProps> = ({ isFiltersOpen, setIsFiltersOpen }) => {
    const {
        filterValue, setFilterValue, minPrice, setMinPrice, maxPrice, setMaxPrice,
        setOrderConfig
    } = useContext(ProductContext);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])

    const handleClose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        if (e.target === e.currentTarget) {
            setIsFiltersOpen(false)
        }
    }

    return (
        <div
            onClick={handleClose}
            className={`${isFiltersOpen === true ? `fixed inset-0 flex
                 justify-center items-center bg-black bg-opacity-40 z-10` :
                'hidden'} lg:hidden `} role='dialog'
        >
            <div className="fixed bg-white shadow-md z-50">
                <div className="flex justify-end p-1">
                    <i
                        className="bi bi-x-lg text-sm"
                        onClick={handleClose}
                    />
                </div>
                <div className="p-3 ">
                    <div >
                        Filtrar por
                        <input
                            value={filterValue}
                            onChange={e => setFilterValue(e.target.value)}
                            className="ml-2 bg-gray-200"
                        />
                    </div>
                    <div className="flex gap-3 mt-3">
                        <div className="w-24">
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
                        <div className="w-24">
                            <label>Preço máximo</label>
                            <input
                                type='number'
                                className="w-full bg-gray-200"
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
                </ div>
            </div>
        </div>
    )
}

export default Filters;

import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";

interface FiltersProps {
    isFiltersOpen: boolean,
    setIsFiltersOpen: (value: boolean) => void
}

const Filters: React.FC<FiltersProps> = ({ isFiltersOpen, setIsFiltersOpen }) => {
    const {
        filterValue, setFilterValue, minPrice, setMinPrice, maxPrice, setMaxPrice
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
            <div className="fixed bg-white shadow-md z-50 p-3 w-80">
                <div className="flex justify-end">
                    <i
                        className="bi bi-x text-xl"
                        onClick={handleClose}
                    />
                </div>
                <div className="">
                    <div >
                        Filtrar por
                        <input
                            value={filterValue}
                            onChange={e => setFilterValue(e.target.value)}
                            className="ml-2 bg-gray-200"
                        />
                    </div>
                    <div className="flex gap-3 mt-5 ">
                        <div className="w-24">
                            <label>Preço minimo</label>
                            <input
                                type='number'
                                className="w-full bg-gray-200"
                                value={minPrice}
                                onChange={e => setMinPrice(e.target.value)}
                            />
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
                </ div>
            </div>
        </div>
    )
}

export default Filters;

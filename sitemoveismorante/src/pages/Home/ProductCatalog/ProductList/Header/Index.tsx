import { categoriesData } from "../../../../../assets/data/categories";
import { useProductsCatalog } from "../../../../../context/ProductsCatalogContext";
import { SortBy } from "../../../../../types/productsCatalog.type";
import FilterLabels from "./FilterLabels";

import Sorter from "./Sorter";

interface Props {
    sortBy: SortBy;
    setSortBy: React.Dispatch<React.SetStateAction<SortBy>>
}

const Header = ({sortBy, setSortBy}: Props) => {


    return (
        <div className="flex justify-between w-full">
            <FilterLabels/>
            <Sorter sortBy={sortBy} setSortBy={setSortBy}/>
        </div>
    )
}

export default Header;
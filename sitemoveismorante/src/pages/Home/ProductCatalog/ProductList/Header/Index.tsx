import { SortBy } from "../../../../../types/productsCatalog.type";
import FilterLabels from "./FilterLabels";
import Sorter from "./Sorter";

const Header = (
    { setSortBy }: { setSortBy: React.Dispatch<React.SetStateAction<SortBy>> }
) => {
    return (
        <div className="flex justify-between w-full">
            <FilterLabels />
            <Sorter setSortBy={setSortBy} />
        </div>
    )
}

export default Header;
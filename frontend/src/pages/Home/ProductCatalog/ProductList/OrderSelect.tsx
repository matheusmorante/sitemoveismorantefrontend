import { SortBy } from "../../../../types/productsCatalog.type";

interface Props {
    sortBy: SortBy,
    setSortBy: React.Dispatch<React.SetStateAction<SortBy>>
}

const OrderSelect = ({sortBy, setSortBy}: Props) => {
    
    return (
        <select  onChange={e => setSortBy(e.target.value as SortBy)}>
            <option label=""></option>
            
        </select>
    )
}

export default OrderSelect;
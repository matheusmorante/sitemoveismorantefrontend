import { useProductsCatalog } from "../../../../../../context/ProductsCatalogContext";
import { Category } from "../../../../../../types/category.type";

const Subcategory = ({ subCategory }: { subCategory: Category }) => {
    const { setFilterConfig, filterConfig } = useProductsCatalog();
    const isCategoryFiltered = filterConfig.categoryIds.includes(subCategory.id);
  
    const toggleSubcategorySelection = () => {
        setFilterConfig(prev => {
            const current = [...prev['categoryIds']];

            if (isCategoryFiltered) {
                const newIds = current.filter(id => subCategory.id !== id);
                return { ...prev, categoryIds: newIds }
            } else {
                const newIds = [...current, subCategory.id];
                return { ...prev, categoryIds: newIds };
            }
        }) 
    }

    return (
        <li key={subCategory.id} className="flex gap-1">
            <input
                type='checkbox'
                checked={isCategoryFiltered}
                onClick={toggleSubcategorySelection}
            />

            <button
                onClick={toggleSubcategorySelection}
                className={isCategoryFiltered ? 'text-blue-600' : ''}
            >
                {subCategory.name}
            </button>

        </li>
    )
}

export default Subcategory
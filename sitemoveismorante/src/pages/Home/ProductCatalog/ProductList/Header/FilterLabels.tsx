import { categoriesData } from "../../../../../assets/data/categories";
import { useProductsCatalog } from "../../../../../context/ProductsCatalogContext";
import formatCurrency from "../../../../../utils/formatCurrency";

const FilterLabels = () => {
    const { filterConfig, setFilterConfig, handleFilterConfig } =
        useProductsCatalog();
    const categories = categoriesData.filter(
        cat => filterConfig.categoryIds.find(id => id === cat.id)
    );
    const removeCategory = (id: number) => {
        setFilterConfig(prev => {
            const newCategoryIds = prev.categoryIds.filter(i => i !== id);
            return {...prev, categoryIds:newCategoryIds}
        })
    }

    const titleSearch = filterConfig.titleSearch;
    const isTitleFiltered = titleSearch.length > 0;

    const minPrice = filterConfig.minPrice;
    const formattedMinPrice = minPrice ? formatCurrency(Number(minPrice)) : '';

    const maxPrice = filterConfig.maxPrice;
    const formattedMaxPrice = maxPrice ? formatCurrency(Number(maxPrice)) : "";


    const filters = [];

    if (isTitleFiltered) filters
        .push({
            text: `contêm "${titleSearch}" no título`,
            onRemove: () => handleFilterConfig('titleSearch', '')
        });


    if (minPrice && maxPrice) filters
        .push({
            text: `de ${formattedMinPrice} até ${formattedMaxPrice}`,
            onRemove: () => {
                handleFilterConfig('maxPrice', "");
                handleFilterConfig('minPrice', "");
            }
        });

    if (minPrice && !maxPrice) filters
        .push({
            text: `a partir de ${formattedMinPrice}`,
            onRemove: () => handleFilterConfig('minPrice', "")
        });

    if (!minPrice && maxPrice) filters
        .push({
            text: `até ${formattedMaxPrice}`,
            onRemove: () => handleFilterConfig('maxPrice', "")
        });

    filterConfig.categoryIds.map(id => {
        const category = categories.find(cat => cat.id === id);
        filters.push(
            {
                text: `${category?.name}`,
                onRemove: () => removeCategory(id)
            }
        )
    })


    return (
        <div className="flex gap-2 items-center">
            <span >Filtros: </span>
            <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                    <span className="bg-blue-500 rounded-full text-white py-1 px-2">
                        {f.text}
                        <i className="bi bi-x ml-1" onClick={f.onRemove} />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default FilterLabels
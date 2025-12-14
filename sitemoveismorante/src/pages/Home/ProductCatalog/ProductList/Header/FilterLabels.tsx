import { categoriesData } from "../../../../../assets/data/categories";
import { useProductsCatalog } from "../../../../../context/ProductsCatalogContext";
import formatCurrency from "../../../../../utils/formatCurrency";

const FilterLabels = () => {
    const { filterConfig } = useProductsCatalog();
    const categories = categoriesData.filter(
        cat => filterConfig.categoryIds.find(id => id === cat.id)
    );
    const stringifyCategories = categories
        .map(c => c.name)
        .join(', ')

    const titleSearch = filterConfig.titleSearch;
    const isTitleFiltered = titleSearch.length > 0;

    const minPrice = filterConfig.minPrice;
    const formattedMinPrice = formatCurrency(minPrice);

    const maxPrice = filterConfig.maxPrice;
    const formattedMaxPrice = formatCurrency(maxPrice);

    const filters = [];

    if (isTitleFiltered) filters
        .push(`contêm "${titleSearch}" no título`);

    if (categories.length > 0) filters
        .push(stringifyCategories);

    if (minPrice && maxPrice) filters
        .push(`de ${formattedMinPrice} até ${formattedMaxPrice}`);

    if (minPrice && !maxPrice) filters
        .push(`a partir de ${formattedMinPrice}`);

    if (!minPrice && maxPrice) filters
        .push(`até ${formattedMaxPrice}`);

    return (
        <div className="flex gap-2 items-center">
            <span >Filtros: </span>
            {filters.map((f: String) => (
                <span className="bg-blue-500 rounded-full text-white py-1 px-2">
                    {f}
                    <i className="bi bi-x ml-1" />
                </span>
            ))}
        </div>
    )
}

export default FilterLabels
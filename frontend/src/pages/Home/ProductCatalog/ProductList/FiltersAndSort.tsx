import { categoriesData } from "../../../../assets/data/categories";
import { useProductsCatalog } from "../../../../context/ProductsCatalogContext";
import { SortBy } from "../../../../types/productsCatalog.type";

const FiltersAndSort = (sortBy: { sortBy: SortBy }) => {
    const { filterConfig } = useProductsCatalog();
    const categories = categoriesData.filter(
        cat => filterConfig.categoryIds.find(id => id === cat.id)
    );
    const stringifyCategories = categories.join(', ')

    const titleSearch = filterConfig.titleSearch;
    const isTitleFiltered = titleSearch.length > 0;

    const minPrice = filterConfig.minPrice;
    const formattedMinPrice = minPrice;

    const maxPrice = filterConfig.maxPrice;
    const formattedMaxPrice = maxPrice;

    const filters = [];

    if (isTitleFiltered) filters
        .push(`contem "${titleSearch}" no título`);
    if (categories.length > 0) filters
        .push(stringifyCategories);
    if (minPrice && maxPrice) filters
        .push(`de ${formattedMinPrice} até ${formattedMaxPrice }`);
    if (minPrice && !maxPrice) filters
        .push(`a partir de ${formattedMinPrice}`);
    if (!minPrice && maxPrice) filters
        .push(`até ${formattedMaxPrice}`);

    return (
        <div>
            <span>Filtrado por {}</span>
            <span>Filtrado por {}</span>
        </div>
    )
}

export default FiltersAndSort;
import { useProductsCatalog } from "../../../../../context/ProductsCatalogContext";

const Search = () => {
  const { filterConfig, handleFilterConfig } = useProductsCatalog();

  return (
    <div>
      Filtrar por
      <input
        value={filterConfig.titleSearch}
        onChange={e => handleFilterConfig('titleSearch', e.target.value)}
        className="bg-gray-200"
      />
    </div>
  )
}

export default Search
import CurrencyInput from "../../../../../components/CurrencyInput"
import { useProductsCatalog } from "../../../../../context/ProductsCatalogContext"

const PriceRange = () => {
  const { filterConfig, handleFilterConfig } = useProductsCatalog();
  const min = filterConfig.minPrice;
  const max = filterConfig.maxPrice;

  const handleChange = (key: "minPrice" | "maxPrice", value: string) => {
    const num = Number(value) || 0;

    const currentMin = filterConfig.minPrice ?? 0;
    const currentMax = filterConfig.maxPrice ?? 5000;

    const newMin = key === "minPrice" ? num : currentMin;
    const newMax = key === "maxPrice" ? num : currentMax;

    if (newMin > newMax) return;
    if (newMax > 5000) return;
    if (newMin < 0) return;

    handleFilterConfig(key, num);
  };

  return (
    <div className="flex gap-3 mt-3">
      <div className="flex flex-col">
        <label>Preço minimo</label>
        <div>
          <CurrencyInput
            className="w-full bg-gray-200"
            value={min}
            onChange={(value: string) => handleChange('minPrice', value)}
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <label>Preço máximo</label>
        <CurrencyInput
          className="w-full bg-gray-200"
          value={max}
          onChange={(value: string) => handleChange('maxPrice', value)}
        />
      </div>
    </div>
  )
}

export default PriceRange
import CurrencyInput from "../../../../../components/CurrencyInput"
import { useProductsCatalog } from "../../../../../context/ProductsCatalogContext"
import { highestPrice, lowestPrice } from "../../../../../utils/calculations";
import formatCurrency from "../../../../../utils/formatCurrency";

const PriceRange = () => {
  const { handledProducts, filterConfig, handleFilterConfig } = useProductsCatalog();
  const min = filterConfig.minPrice;
  const max = filterConfig.maxPrice;

  const handleChange = (key: "minPrice" | "maxPrice", value: string) => {
    handleFilterConfig(key, value);

  };

  const onBlur = (key: "minPrice" | "maxPrice", value: string) => {
    const minValue = Number(key === "minPrice" ? value : min);
    const maxValue = Number(key === "maxPrice" ? value : max);

    if (minValue && maxValue && minValue > maxValue) {

      key === "minPrice" ? (
        handleFilterConfig(key, String(maxValue - 1))
      ) : (
        handleFilterConfig("minPrice", String(maxValue - 1))
      )
    }
  }


  return (
    <div className="flex gap-3 mt-3">
      <div className="flex flex-col">
        <label>Preço minimo</label>
        <div>
          <CurrencyInput
            className="w-full bg-gray-200 pl-1"
            value={min}
            onBlur={(v: string) => onBlur('minPrice', v)}
            placeholder={formatCurrency(lowestPrice(handledProducts))}
            onChange={(v: string) => handleChange('minPrice', v)}
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <label>Preço máximo</label>
        <CurrencyInput
          className="w-full bg-gray-200 pl-1"
          value={max}
          onBlur={(v: string) => onBlur('maxPrice', max)}
          placeholder={formatCurrency(highestPrice(handledProducts))}
          onChange={(v: string) => handleChange('maxPrice', v)}
        />
      </div>
    </div>
  )
}

export default PriceRange
import { Pricing as PricingType } from "../../../../../types/productsCatalog.type";
import CurrencyDisplay from "../../../../CurrencyDisplay";

const Pricing = ({ pricing }: { pricing: PricingType }) => {
    const { price, promotionalPrice, paymentDiscountPercent } = pricing;
    const baseValue = promotionalPrice ?? price;
    const paymentDiscountFixed = baseValue * paymentDiscountPercent / 100;
    const totalValue = baseValue - paymentDiscountFixed;

    return (
        <div className="flex flex-col w-[30%] text-end">
            <div>
                <CurrencyDisplay value={totalValue} className="text-green-500 font-bold"/>
                ({paymentDiscountPercent}% OFF)
            </div>
            <div>à vista no Pix</div>
            <p className="inline-block text-gray-500">
                ou <CurrencyDisplay value={baseValue} /> em até 10x sem juros no cartão
            </p>
        </div>
    )
}

export default Pricing
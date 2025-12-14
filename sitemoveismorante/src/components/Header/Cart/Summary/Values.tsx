import { useCart } from "../../../../context/CartContext";
import { getCartSummary } from "../../../../utils/calculations";
import CurrencyDisplay from "../../../CurrencyDisplay";

const Values = () => {
     const { items } = useCart()
        const {subtotal, totalPaymentDiscountFixed} = getCartSummary(items);
        const cartTotalValue = subtotal - totalPaymentDiscountFixed;
    return (
          <div className="flex flex-col text-end gap-2">
                <CurrencyDisplay value={subtotal} />
                <CurrencyDisplay value={totalPaymentDiscountFixed} />
                <div className="flex flex-col">
                    <CurrencyDisplay value={cartTotalValue} /> à vista no Pix 
                    <div className="text-gray-600">
                        ou <CurrencyDisplay value={subtotal} /> em até 10x sem juros de
                        no cartão
                    </div>
                </div>
            </div>
    )
}

export default Values
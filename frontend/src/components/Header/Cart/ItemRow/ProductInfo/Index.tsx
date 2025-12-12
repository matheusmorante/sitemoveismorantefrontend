import { CartItem } from "../../../../../types/cart.type"
import { Product } from "../../../../../types/productsCatalog.type"
import Pricing from "./Pricing"
import QuantityControl from "./QuantityControl"

interface Props {
    product: Product,
    item: CartItem
}

const ProductInfo = ({ product, item }: Props) => {
    return (
        <div className="flex w-full justify-between">
            <div>
                <h1>{product.title}</h1>
                <QuantityControl item={item} />
            </div>
            <Pricing pricing={product.pricing} />
        </div>
    )
}

export default ProductInfo
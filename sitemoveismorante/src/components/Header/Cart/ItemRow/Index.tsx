import { CartItem } from "../../../../types/cart.type";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo/Index";
import { productsData } from "../../../../assets/data/products/products";

interface Props {
    item: CartItem,
}

const ItemRow = ({ item }: Props) => {
    const product = productsData.find(p => p.id === item.productId);

    if(!product) return null;

    return (
        <div className="flex gap-2 border-t-2 py-3">
            <ProductImage src={product.images[0]} />
            <ProductInfo item={item} product={product}/>
        </div>
    )
}

export default ItemRow

import { useCart } from "../../../../../context/CartContext";
import { CartItem } from "../../../../../types/cart.type";
import QuantityInput from "../../../../QuantityInput";

const QuantityControl = ({ item }: { item: CartItem }) => {
    const { updateQuantity, increase, decrease, onRemove } = useCart()
    const productId = item.productId;

    return (
        <div className="flex w-24 border-2 p-1 justify-between">
            {
                item.quantity > 1 ?
                    <button onClick={() => decrease(productId)}>
                        -
                    </button> :
                    <i className="bi bi-trash" onClick={() => onRemove(item.id)} />
            }
            <QuantityInput
                quantity={item.quantity}
                onChange={(value: number) => updateQuantity(value, item.id)}
            />
            <button onClick={() => increase(productId)}>+</button>
        </div>
    )
}

export default QuantityControl
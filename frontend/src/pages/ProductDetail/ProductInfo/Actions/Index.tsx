import { useState } from "react";
import { useCart } from "../../../../context/CartContext";
import { Product } from "../../../../types/productsCatalog.type";
import QuantityControl from "./QuantityControl";

const Actions = ({ product }: { product: Product }) => {
    const { items, addItem, increase, setOpenCart } = useCart()
    const [quantity, setQuantity] = useState<number>(1)

    const addOrIncrease = () => {
        const alreadyAddedToCart = items.find(i => i.productId === product.id);

        if (alreadyAddedToCart) {
            increase( product.id,quantity);
        } else {
            addItem(product.id,quantity);
        }
    }

    const onBuy = () => {
        addOrIncrease();
        setOpenCart(true);
    }

     const onAddToCart = () => {
       addOrIncrease();
    }

    return (
        <div className="flex items-center justify-end gap-5 my-3">
            <QuantityControl quantity={quantity} setQuantity={setQuantity} />
            <button onClick={onAddToCart} className="p-2 bg-blue-500 font-bold text-white">
                Adicionar ao Carrinho
            </button>
            <button
                className="p-2 items-center text-white
                        bg-green-500 font-bold"
                onClick={onBuy}
            >
                Comprar
            </button>
        </div>
    )
}

export default Actions
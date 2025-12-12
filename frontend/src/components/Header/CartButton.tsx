import { useCart } from "../../context/CartContext"

const CartButton = () => {
    const { openCart, setOpenCart, items } = useCart();
    const itemsCounter = items.length > 9 ? '9+' : items.length;
    return (
        <div className="relative">
            <div className="absolute rounded-full bg-red-500 w-4 h-4 -top-2 -left-3
             text-[10px] flex items-center justify-center">
                {itemsCounter}
            </div>
            <i className='bi bi-cart' onClick={() => setOpenCart(!openCart)} />
        </div>
    )
}

export default CartButton
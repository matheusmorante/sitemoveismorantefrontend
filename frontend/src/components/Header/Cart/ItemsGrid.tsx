import { useCart } from "../../../context/CartContext"
import ItemRow from "./ItemRow/Index";

const ItemsGrid = () => {
    const { items } = useCart();
    
    return (
        <div className="flex flex-col flex-1 overflow-y-auto relative">
            {items.length > 0 ? (
                items.map(item => <ItemRow item={item} key={item.id}/>)
            ) : (
                <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
                     Carrinho vázio 
                </div>
            )}
        </div>
    )
}

export default ItemsGrid

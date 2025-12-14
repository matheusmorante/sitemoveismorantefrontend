import { useCart } from "../../../context/CartContext";
import Overlay from "../../Overlay";
import Actions from "./Actions";
import ItemsGrid from "./ItemsGrid";
import Summary from "./Summary/Index";

interface Props {
    isOpen: boolean,
    onClose: () => void,
}

const Cart = ({ isOpen, onClose }: Props) => {
    const { items } = useCart()

    return (
        <Overlay isOpen={isOpen} onClose={onClose}>
            <aside className="flex flex-col fixed h-[98%] w-[600px] top-0 right-0 
            bg-gray-100 p-2 z-50 my-2">
                <div className="flex justify-between items-center">
                    <i className="bi bi-x text-2xl" onClick={onClose} />
                    <h1>Carrinho</h1>
                    <div>{items.length} item(ns) adicionado(s)</div>
                </div>
                <ItemsGrid />
                <Summary />
                <Actions/>
            </aside>
        </Overlay>
    )
}

export default Cart

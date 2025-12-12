import { useCart } from "../../../context/CartContext";

const Actions = () => {
    const {setOpenCart} = useCart();

    const onClose = () =>{
        setOpenCart(false);
    }

    const onCheckout = () => {
        alert('Fim da demo :D');
    }
    return (
        <div className="flex w-full justify-end gap-2">
            <button 
                className="border p-2 border-blue-700 text-blue-700 text-lg font-bold"
                onClick={onClose}
            >
                Continuar comprando
            </button>
            <button 
                className="font-bold px-2 text-white bg-green-600 text-lg p-2"
                onClick={onCheckout}
            >
                Finalizar Compra
            </button>
        </div>
    )
}

export default Actions
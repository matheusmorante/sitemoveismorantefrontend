
export type CartItem = {
    id: number,
    productId: number
    quantity: number
}

export type CartSummary = {subtotal: number, totalPaymentDiscountFixed: number}


export type CartContextType = {
    openCart: boolean,
     setOpenCart: React.Dispatch<React.SetStateAction<boolean>>,
    items: CartItem[],
    setItems: React.Dispatch<React.SetStateAction<CartItem[]>>,
    onRemove: (id: number) => void,
    updateQuantity: (value: number, id: number) => void,
    addItem: (productId: number, quantity:  number) => void;
    decrease: ( id: number) => void,
    increase: ( id: number, quantity?:  number) => void
}
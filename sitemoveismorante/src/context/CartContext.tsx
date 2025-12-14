import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "../types/cart.type";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartContextType } from "../types/cart.type";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useLocalStorage<CartItem[]>('items', []);
    const [openCart, setOpenCart] = useState(false)

    const updateQuantity = (value: number, id: number) => {
        setItems((prev: CartItem[]) =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: value } : item
            )
        )
    }

    const addItem = (productId: number, quantity: number = 1) =>{
        const itemId = items.length === 0 ? 1 : items.length + 1;
        
         setItems((prev: CartItem[]) => [
                ...prev,
                { id: itemId, productId: productId, quantity: quantity }
            ]);
    }

    const decrease = (productId: number) => {
         setItems((prev: CartItem[]) =>
            prev.map(item =>
                item.productId=== productId ? { ...item, quantity: item.quantity-- } : item
            )
        )
    }

    const increase = (productId: number, quantity: number = 1) => {
        setItems((prev: CartItem[]) =>
            prev.map(item =>
                item.productId === productId ? 
                { ...item, quantity: item.quantity + quantity } : item
            )
        )
    }

    const onRemove = (id: number) => {
        setItems((prev: CartItem[]) => {
            return [...prev].filter(item => item.id !== id)
        })
    }

    return (
        <CartContext.Provider value={{
            openCart, setOpenCart, items, setItems,
            onRemove, updateQuantity, decrease, increase, addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const useCart = useContext(CartContext);
    if (!useCart) throw new Error('useCart deve ser usado dentro de CartProvider');
    return useCart;
}


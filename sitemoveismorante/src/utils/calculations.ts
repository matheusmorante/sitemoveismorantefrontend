import { productsData } from "../assets/data/products/products";
import { CartItem, CartSummary } from "../types/cart.type";
import { Product } from "../types/productsCatalog.type";

const findProduct = (id: number) => productsData.find(p => p.id === id);

const sumBy = (items: CartItem[], callback: (product: any, item: CartItem) => number) => {
    return items.reduce((acc, item) => {
        const product = findProduct(item.productId);
        return product ? acc + callback(product, item) : acc;
    }, 0);
};

export const calcTotalQuantity = (items: CartItem[]) =>
    items.reduce((acc, { quantity }) => acc + quantity, 0);

export const calcSubtotal = (items: CartItem[]) =>
    sumBy(items, (product, item) => product.pricing.price * item.quantity);

export const calcTotalPaymentDiscountFixed = (items: CartItem[]) =>
    sumBy(items, (product, item) =>
        product.pricing.price *
        item.quantity *
        (product.pricing.paymentDiscountPercent / 100)
    );

export const getCartSummary = (cartItems: CartItem[]): CartSummary => ({
    subtotal: calcSubtotal(cartItems),
    totalPaymentDiscountFixed: calcTotalPaymentDiscountFixed(cartItems)
});

export const highestPrice = (products: Product[]) => { 
    return products.reduce(
        (current, product) => Math.max(current, product.pricing.price),
        0
    )
}

export const lowestPrice = (products: Product[]) => {
    const lowest = highestPrice(products);
    return products.reduce(
        (current, product) => Math.min(current, product.pricing.price),
        lowest
    )
}
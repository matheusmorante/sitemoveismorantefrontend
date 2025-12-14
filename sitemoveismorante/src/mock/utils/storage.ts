import { CartItem } from '../../types/cart.type';
import { Product } from '../../types/productsCatalog.type';
import { User } from '../../types/users.type';
import { productsData } from '../../assets/data/products/products';
import { categoriesData } from '../../assets/data/categories';
import { Category } from '../../types/category.type';

export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const loadUsers = async (): Promise<User[]> => {
    await delay(200);
    return JSON.parse(localStorage.getItem('users') || '[]');
};

export const saveUsers = async (users: User[]): Promise<void> => {
    await delay(100);
    const newUsers = JSON.stringify(users);
    localStorage.setItem('users', newUsers);
};

export const loadCart = async (): Promise<CartItem[]> => {
    await delay(100);
    return JSON.parse(localStorage.getItem('cartItems') || '[]')
}

export const saveCart = async (item: CartItem[]): Promise<void> => {
    await delay(100);
    const items = JSON.stringify(item);
    localStorage.setItem('items', items);
};

export const loadProducts = async (): Promise<Product[]> => {
    await delay(500);
    return productsData
}

export const loadCategories = async (): Promise<Category[]> => {
    await delay(500)
    return categoriesData
}

import { createContext, ReactNode, useEffect, useState } from 'react';
import { productsData, Product } from '../assets/data/products';

interface ProductContextType {
    products: Product[];
    productSelected: number | null;
    setProductSelected: (value: number | null) => void;
    filterValue: string;
    setFilterValue: (value: string) => void;
    minPrice: string | number;
    setMinPrice: (value: string | number) => void;
    maxPrice: string | number;
    setMaxPrice: (value: string | number) => void;
}

export const ProductContext = createContext<ProductContextType>({
    products: [],
    productSelected: null,
    setProductSelected: () => { },
    filterValue: '',
    setFilterValue: () => { },
    minPrice: '',
    setMinPrice: () => { },
    maxPrice: '',
    setMaxPrice: () => { },
});

interface ProductProviderProps {
    children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [productSelected, setProductSelected] = useState<number | null>(null);
    const [filterValue, setFilterValue] = useState<string>('');
    const [minPrice, setMinPrice] = useState<number | string>('');
    const [maxPrice, setMaxPrice] = useState<number | string>('');

    useEffect(() => {
        const filteredProducts: Product[] = productsData.filter((product) =>
            product.title.toLowerCase().includes(filterValue.toLowerCase())  &&
            (minPrice ? product.price >= Number(minPrice) : true) &&
            (maxPrice ? product.price <= Number(minPrice) : true)

        );
        setProducts(filteredProducts)
    }, [filterValue, minPrice,maxPrice])

    return (
        <ProductContext.Provider
            value={
                {
                    products, productSelected, setProductSelected, filterValue,
                    setFilterValue, minPrice, setMinPrice, maxPrice, setMaxPrice
                }
            }
        >
            {children}
        </ProductContext.Provider>
    )
};

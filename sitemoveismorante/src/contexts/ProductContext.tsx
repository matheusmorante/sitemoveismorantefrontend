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
    orderConfig: string;
    setOrderConfig: (value: string) => void;
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
    orderConfig: '',
    setOrderConfig: () => { },
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
    const [orderConfig, setOrderConfig] = useState<string>('ascTitle')

    useEffect(() => {
        let handledProducts = productsData.filter((product) =>
            product.title.toLowerCase().includes(filterValue.toLowerCase()) &&
            (minPrice ? product.price >= Number(maxPrice) : true) &&
            (maxPrice ? product.price <= Number(minPrice) : true)
        );

        switch (orderConfig) {
            case 'ascTitle':
                handledProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'descTitle':
                handledProducts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'ascPrice':
                handledProducts.sort((a, b) => a.price - b.price);
                break;
            case 'descPrice':
                handledProducts.sort((a, b) => b.price - a.price );
                break;
        }

        setProducts(handledProducts)
    }, [filterValue, minPrice, maxPrice, orderConfig])

    return (
        <ProductContext.Provider
            value={
                {
                    products, productSelected, setProductSelected, filterValue,
                    setFilterValue, minPrice, setMinPrice, maxPrice, setMaxPrice,
                    orderConfig, setOrderConfig
                }
            }
        >
            {children}
        </ProductContext.Provider>
    )
};

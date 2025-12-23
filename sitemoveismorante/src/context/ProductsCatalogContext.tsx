import { createContext, useContext, useState, ReactNode } from 'react';
import { Product, ProductContextType } from '../types/productsCatalog.type';
import { FilterConfig } from '../types/filterConfig.type';

const ProductsCatalogContext = createContext<ProductContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filterConfig, setFilterConfig] = useState<FilterConfig>({
        titleSearch: '',
        minPrice: "",
        maxPrice: "",
        categoryIds: []
    });
    const [handledProducts, setHandledProducts] = useState<Product[]>([]);

    const handleFilterConfig = (
        key: keyof FilterConfig,
        value: number | string | number[]
    ) => {
        setFilterConfig(prev => {
            if (key === "categoryIds") {
                if (!Array.isArray(value)) return prev;
                return { ...prev, categoryIds: value };
            }

            return { ...prev, [key]: value };
        });
    };



    return (
        <ProductsCatalogContext.Provider value={{
            products,
            setProducts,
            handledProducts,
            setHandledProducts,
            filterConfig,
            setFilterConfig,
            handleFilterConfig,
        }}>
            {children}
        </ProductsCatalogContext.Provider>
    );
};

export const useProductsCatalog = () => {
    const ctx = useContext(ProductsCatalogContext);
    if (!ctx) throw new Error('useProductsCatalog deve ser usado dentro de UserProvider');
    return ctx;
};

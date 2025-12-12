import { useEffect, useState } from "react";
import { handleProducts } from "../../../../utils/handleProducts";
import { productsData } from "../../../../assets/data/products/products";
import ProductPagination from "./ProductPagination";
import ProductCard from "./ProductCard";
import { useProductsCatalog } from "../../../../context/ProductsCatalogContext";
import { Product, SortBy } from "../../../../types/productsCatalog.type";

interface Props {
    sortBy: SortBy
}

const ProductList = ({ sortBy }: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { filterConfig } = useProductsCatalog();
    const [handledProducts, setHandledProducts] = useState<Product[]>([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const load = async () => {
            const { handledProducts, pageCount } = await handleProducts(
                productsData,
                filterConfig,
                sortBy,
                currentPage
            );
            setHandledProducts(handledProducts);
            setPageCount(pageCount);
        };
        load();
    }, [filterConfig, sortBy, currentPage]);

    return (
        <div className="flex flex-col w-full">
            <div className="flex-1">
                {handledProducts.length > 0 ? (
                    <div
                        className="grid mt-3 gap-4 md:grid-cols-4 xl:grid-cols-6"
                    >
                        {handledProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center my-40">Nenhum produto encontrado</h1>
                )}
            </div>

            <ProductPagination pageCount={pageCount} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default ProductList
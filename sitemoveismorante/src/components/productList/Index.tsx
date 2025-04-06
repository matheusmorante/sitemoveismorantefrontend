import { useContext, useState, memo } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "./ProductCard";
import PromotionCourosel from "../promoCourosel/Index";
import ProductDetail from "../ProductDetail";
import Filters from "./Filters";
import ProductPagination from "./ProductPagination";
import { Product as ProductType } from "../../assets/data/products";


const ProductList = memo(() => {
    const { products, productSelected } = useContext(ProductContext);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [currentProducts, setCurrentProducts] = useState<ProductType[]>([])

    return (
        <>
            <PromotionCourosel />

            {
                <section id='products' className="p-3">
                    <div className="flex justify-end">


                        {isFiltersOpen && (
                            <Filters
                                isFiltersOpen={isFiltersOpen}
                                setIsFiltersOpen={setIsFiltersOpen}
                            />
                        )
                        }
                        <i
                            className="bi bi-sliders2 text-2xl"
                            onClick={() => setIsFiltersOpen(true)}
                        />
                    </div>
                    {
                        products.length > 0 ? (
                            <div className="grid grid-cols-2 mt-3 gap-4">
                                {
                                    currentProducts.map(product => (
                                        <Product
                                            key={product.id}
                                            product={product}
                                        />
                                    ))
                                }
                                <ProductPagination
                                    products={products}
                                    setCurrentProducts={setCurrentProducts}
                                />
                            </div>
                        ) : (
                            <h1 className="text-center my-40">
                                Nenhum produto encontrado
                            </h1>
                        )
                    }

                </section>
            }

            {
                productSelected !== null && <ProductDetail />
            }
        </>
    );
});

export default ProductList

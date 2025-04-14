import { useContext, useState, memo } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "./ProductCard";
import PromotionCourosel from "../promoCourosel/Index";
import Filters from "./Filters";
import ProductPagination from "./ProductPagination";
import { Product as ProductType } from "../../assets/data/products";
import Overlay from "../Overlay";


const ProductList = memo(() => {
    const { products } = useContext(ProductContext);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [currentProducts, setCurrentProducts] = useState<ProductType[]>([])

    return (
        <>
            <PromotionCourosel />

            {
                <section id='products' className="p-3 md:px-20 lg:px-40">
                    <div className="flex justify-end">


                        {isFiltersOpen && (
                            <Overlay isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)}>
                                <Filters/>
                            </Overlay>
                        )
                        }
                        <i
                            className="bi bi-sliders2 text-2xl"
                            onClick={() => setIsFiltersOpen(true)}
                        />
                    </div>
                    {
                        products.length > 0 ? (
                            <>
                                <div className="grid grid-cols-2 mt-3 gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-5">
                                    {
                                        currentProducts.map(product => (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            />
                                        ))
                                    }

                                </div>

                                <ProductPagination
                                    products={products}
                                    setCurrentProducts={setCurrentProducts}
                                />

                            </>
                        ) : (
                            <h1 className="text-center my-40">
                                Nenhum produto encontrado
                            </h1>
                        )
                    }

                </section>
            }
        </>
    );
});

export default ProductList

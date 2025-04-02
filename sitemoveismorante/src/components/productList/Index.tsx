import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "./ProductCard";
import PromotionCourosel from "../promoCourosel/Index";
import ProductDetail from "../ProductDetail";
import Filters from "./Filters";

export default function ProductList() {
    const { products, productSelected } = useContext(ProductContext);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    return (
        <>
            <PromotionCourosel />

            {
                <section id='products' className="px-3 py-3 text-gray-600">
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
                                    products.map(product => (
                                        <Product
                                            product={product}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <h1 className="text-center my-40">
                                Nenhum produto encontrado
                            </h1>)
                    }
                </section>
            }

            {
                productSelected !== null && <ProductDetail />
            }
        </>
    );
}

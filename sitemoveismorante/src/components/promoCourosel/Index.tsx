import Product from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { productsData } from '../../assets/data/products';

const PromoCourosel = () => {
    return (
        <section className="gap-3 bg-gradient-to-l from-yellow-200
         to-yellow-400 md:px-20 lg:px-40" >
            <h1 className="text-center py-4 text-xl tracking-wide uppercase
                font-extrabold">
                Promoções Imperdíveis
            </h1>

            <Swiper

                slidesPerView={2}
                breakpoints={{
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1200: { slidesPerView: 5 },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
            >

                {productsData.map(product => (
                    product.prevPrice && (
                        <SwiperSlide className="p-2" key={product.id}>
                            <Product product={product} />
                        </SwiperSlide>
                    )
                ))
                }
            </Swiper>
        </section>

    )
}

export default PromoCourosel

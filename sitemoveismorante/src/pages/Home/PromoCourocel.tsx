
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { productsData } from '../../assets/data/products/products';
import ProductCard from '../../components/ProductCard';

const PromoCourosel = () => {
  return (
    <section
      className="gap-3 bg-gradient-to-l from-yellow-200 to-yellow-400 md:px-2 lg:px-4">
      <h1 className="text-center py-4 text-xl tracking-wide uppercase font-extrabold">
        Promoções Imperdíveis
      </h1>

      <Swiper
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {productsData.map(
          product =>
            product.pricing.promotionalPrice && (
              <SwiperSlide className="p-2" key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </section>
  );
};

export default PromoCourosel;

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Zoom, Pagination, Thumbs } from 'swiper/modules';
import { Product } from '../../types/productsCatalog.type';
import { useState } from 'react';
import 'swiper/css/zoom';
import 'swiper/css';

import { Swiper as SwiperType } from 'swiper/types';

interface ProductGalleryProps {
    product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    return (
        <div>
            <Swiper
                modules={[FreeMode, Zoom, Thumbs]}
                zoom
                loop
                thumbs={{ swiper: thumbsSwiper }}
            >
                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full h-full'>
                            <img
                                src={image}
                                alt={`Imagem ${index + 1} de ${product.pricing.promotionalPrice}`}
                                className=" bg-gray-100 w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                direction="horizontal"
                onSwiper={setThumbsSwiper}
                modules={[FreeMode, Thumbs]}
                spaceBetween={4}
                slidesPerView={4}
                breakpoints={{
                    448: { slidesPerView: 3 },
                    768: { slidesPerView: 6 },
                }}

                watchSlidesProgress={true}
                freeMode={true}
                className='w-full'

            >
                {product.images.map((image, index) => (
                    <SwiperSlide key={index} >
                        <div className="
                            w-20 h-20 aspect-square
                            cursor-pointer
                            rounded border border-gray-200 hover:border-blue-500
                            transition-colors">

                            <img
                                src={image}
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductGallery;

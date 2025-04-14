import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../assets/data/products';
import { useState } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Zoom, Pagination, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types'

interface ProductGalleryProps {
    product: Product
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    return (

        <div>
            <Swiper
                modules={[Pagination, Zoom, Thumbs]}
                zoom={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
            >

                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-zoom-container">
                            <img
                                src={image}
                                alt={`Imagem ${index + 1} de ${product.title}`}
                                className=" bg-gray-100 square"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                className=''
                direction="horizontal"
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                modules={[Thumbs]}
                slidesPerView={6}
            >
                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Thumb ${index + 1}`}
                            className="
                                        cursor-pointer border border-gray-300
                                        hover:border-blue-500 square"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default ProductGallery

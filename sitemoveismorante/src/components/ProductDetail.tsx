import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Zoom, Pagination } from 'swiper/modules';
import { productsData, Product } from '../assets/data/products';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetail = () => {
    const { productSelected, setProductSelected } = useContext(ProductContext);
    const product: Product | undefined = productsData
        .find(product => product.id === productSelected)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        }
    },[]);

    if (!product) return null;

    return (
        <div>
            <div className="fixed inset-0 bg-white overflow-auto z-10">
                <i
                    className="ml-1 bi bi-arrow-left"
                    onClick={() => { setProductSelected(null) }}
                />
                <Swiper
                    modules={[Pagination, Zoom]}
                    slidesPerView={1}
                    zoom={true}
                    pagination={{ clickable: true }}
                    className="w-full"
                >
                    {product.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-zoom-container">
                                <img
                                    src={image}
                                    alt={`Imagem ${index + 1} de ${product.title}`}
                                    className="w-full h-full object-contain bg-gray-100"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='p-3'>
                    <h3>{product.title}</h3>

                    <div >
                        <span className='text-xl text-green-600 font-medium '>
                            R$ {product.price}
                        </span>
                        {product.prevPrice &&
                            <span className='text-red-500 line-through text-sm ml-2'>
                                R$ {product.prevPrice}
                            </span>
                        }
                    </div>
                    <p className='text-sm'>Em até <b>10x sem juros</b> de R$ {product.price / 10} no cartão de crédito.</p>
                    <a href='/' className='text-sm underline text-blue-500' >Informações sobre o crediário</a>
                    <h1 className='mt-3 font-bold'>Descrição</h1>
                    <p>{product.description}</p>
                    <h1 className='mt-3 font-bold'>Medidas</h1>
                    <p>{product.dimensions}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

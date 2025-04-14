import { productsData, Product } from '../assets/data/products';
import { useEffect, useState } from 'react';

import ProductGallery from '../components/ProductDetail/ProductGallery';
import Overlay from '../components/Overlay';
import AcceptedFlagsModal from '../components/ProductDetail/AcceptedFlagsModal';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams()
    const product: Product | undefined = productsData
        .find(product => product.id === Number(id));
    const [showAcceptedFlags, setShowAcceptedFlags] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    if (!product) return null;

    return (

        <div className="fixed inset-0 bg-white overflow-auto z-10 pb-4 md:px-20 lg:px-40">
            <i
                className="ml-1 bi bi-arrow-left text-md"
                onClick={() => navigate('/')}
            />

            <div className='flex flex-col lg:grid grid-cols-2'>
                <ProductGallery product={product} />

                <div className='mt-3 px-2'>
                    <div>
                        <h1 className='text-lg'>{product.title}</h1>
                        <div className='flex items-center text-center'>
                            <span className='flex text-xl items-center text-green-600
                                    font-medium'>
                                R$ {product.price}
                            </span>
                            {product.prevPrice &&
                                <span className='text-red-500 line-through text-sm ml-2'>
                                    R$ {product.prevPrice}
                                </span>
                            }

                        </div>
                    </div>
                    <p className='text-sm'>
                        Em até <b>10x sem juros</b> de R$ {product.price / 10} no cartão de crédito.
                        <span
                            onClick={() => setShowAcceptedFlags(true)}
                            className='ml-2 underline text-blue-500'
                        >
                            Ver bandeiras aceitas.
                        </span>
                    </p>
                    <p>
                        Aceitamos bandeira <b>Senff</b>.
                        <span
                            onClick={() => setShowAcceptedFlags(true)}
                            className='ml-2 underline text-blue-500'
                        >
                            Ver condições.
                        </span>
                    </p>
                    <p>
                        Temos crediário em até 36x.
                        <span
                            onClick={() => navigate('/crediario')}
                            className='ml-2 underline text-blue-500'
                        >
                            Mais informações.
                        </span>
                    </p>
                    <Overlay isOpen={showAcceptedFlags} onClose={() => setShowAcceptedFlags(false)}>
                        <AcceptedFlagsModal />
                    </Overlay>

                    <div className='flex justify-end'>
                        <button className='p-2 my-3 items-center text-white
                                bg-green-500 font-bold'>
                            Realizar Pedido
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-3 px-2'>
                <h1 className='font-bold text-lg mt-4 lg:text-xl lg:mt-6'>Descrição</h1>
                <p>{product.description}</p>
                <h1 className='mt-3 font-bold text-lg lg:text-xl lg:mt-6'>Medidas</h1>
                <p>{product.dimensions}</p>
            </div>
        </div>

    );
}

export default ProductDetail;

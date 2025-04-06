import { useContext, memo } from 'react';
import { Product } from '../../assets/data/products'
import { ProductContext } from '../../contexts/ProductContext';
import handleTitle from '../../utils/handleTitle';

interface ProductProps {
    product: Product;
}

const ProductCard = memo(({ product }: ProductProps) => {
    const { setProductSelected } = useContext(ProductContext)

    return (
        <>
            <div className='rounded-lg bg-white shadow-md  text-gray-600'
                onClick={() => { setProductSelected(product.id) }}>
                <div className='flex items-center justify-center p-2'>
                    <img
                        src={product.images[0]}
                        className='h-full object-cover '
                        alt='imagem do produto'
                        loading='lazy'
                    />
                </div>
                <div className='p-2'>
                    <div>{handleTitle(product.title)}</div>

                    <div className='flex items-center gap-2'>
                        <span className='text-green-500 text-lg font-medium
                            whitespace-nowrap'>
                            R$ {product.price}
                        </span>
                        {product.prevPrice && (
                            <span className='text-red-500 line-through text-xs
                                whitespace-nowrap'>
                                R$ {product.prevPrice}
                            </span>
                        )}
                    </div>
                    <p className='text-sm'>Em até 10x sem juros no cartão de crédito</p>
                </div>
            </div>
        </>
    )
});

export default ProductCard

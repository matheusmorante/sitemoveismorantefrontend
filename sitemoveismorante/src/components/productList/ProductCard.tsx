import { memo } from 'react';
import { Product } from '../../assets/data/products'
import handleTitle from '../../utils/handleTitle';
import { useNavigate } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

interface ProductProps {
    product: Product;
}

const ProductCard = memo(({ product }: ProductProps) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='product-card rounded-lg bg-white shadow-md text-gray-600'
                onClick={() => navigate(`/product/${product.id}`)}>
                <div className='img-container flex items-center justify-center p-2'>
                    <img
                        src={product.images[0]}
                        className='square'
                        alt='imagem do produto'
                        loading='lazy'
                    />
                </div>
                <div className='p-2'>
                    <div>{handleTitle(product.title)}</div>

                    <div className='flex items-center gap-2'>
                        <span className='text-green-500 text-lg font-medium
                            whitespace-nowrap'>
                            {formatCurrency(product.price)}
                        </span>
                        {product.prevPrice && (
                            <span className='text-red-500 line-through text-xs
                                whitespace-nowrap'>
                                {formatCurrency(product.prevPrice)}
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

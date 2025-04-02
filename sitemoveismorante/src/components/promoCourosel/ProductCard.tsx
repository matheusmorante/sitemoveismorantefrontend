import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { Product } from '../../assets/data/products'

interface ProductProps {
    product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
    const { setProductSelected } = useContext(ProductContext);

    return (
        <>
            <div
                className='promotionalProduct rounded-lg bg-white '
                onClick={() => setProductSelected(product.id) }
            >
                <div className='p-2'>
                    <img
                        src={product.images[0]}
                        className='object-cover'
                        alt='imagem do produto'
                        loading='lazy'
                    />
                </div>
                <div className='p-2'>
                    <div>{product.title}</div>

                    <div>
                        <span className='text-green-500 text-lg font-medium'>
                            R$ {product.price}
                        </span>
                        {product.prevPrice &&
                            <span className='text-red-500 line-through text-sm ml-2'>
                                R$ {product.prevPrice}
                            </span>
                        }
                    </div>
                    <p className='text-sm'>Em até 10x sem juros no cartão de crédito</p>
                </div>
            </div>

        </>
    )
};

export default ProductCard;

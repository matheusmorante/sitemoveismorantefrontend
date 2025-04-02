import { useContext} from 'react';
import { Product } from '../../assets/data/products'
import { ProductContext } from '../../contexts/ProductContext';


interface ProductProps {
    product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
    const { setProductSelected } = useContext(ProductContext)

    return (
        <>
            <div className='rounded-lg bg-white shadow-md'
                onClick={() => { setProductSelected(product.id) }}>
                <div className='flex items-center h-40 p-1'>
                    <img
                        src={product.images[0]}
                        className='w-full object-cover'
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
}

export default ProductCard

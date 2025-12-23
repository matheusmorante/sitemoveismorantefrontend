import formatCurrency from '../utils/formatCurrency';
import { Product } from '../types/productsCatalog.type';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const pricing = product.pricing

  return (
    <div
      className=" product-card rounded-lg bg-white
                 text-gray-600 "
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="img-container flex items-center justify-center p-2 lg:p-4">
        <img
          src={product.images[0]}
          className="square"
          alt="imagem do produto"
          loading="lazy"
        />
      </div>
      <div className="p-2">
        <div>{product.title}</div>

        <div>
          <span className="text-green-500 text-lg font-medium">
            {formatCurrency(pricing.price)}
          </span>
          {pricing.promotionalPrice && (
            <span className="text-red-500 line-through text-xs ml-2">
              {formatCurrency(pricing.promotionalPrice)}
            </span>
          )}
        </div>
        <p className="text-sm">Em até 10x sem juros no cartão de crédito</p>
      </div>
    </div>
  );
};

export default ProductCard;

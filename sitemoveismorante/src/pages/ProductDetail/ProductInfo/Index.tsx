import { useNavigate } from 'react-router-dom';
import { Product } from "../../../types/productsCatalog.type";
import Pricing from "./Pricing";
import Actions from "./Actions/Index";

interface Props {
    product: Product,
}

const ProductInfo = ({ product}: Props) => {
    const navigate = useNavigate();

    return (
        <div className="mt-3 px-2">
            <Pricing product={product}/>
            
            <p>
                Temos crediário em até 36x.
                <span
                    onClick={() => navigate('/crediario')}
                    className="ml-2 underline text-blue-500"
                >
                    Mais informações.
                </span>
            </p>

            <Actions product={product} />
        </div>
    )
}

export default ProductInfo
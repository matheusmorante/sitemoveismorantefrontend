import { productsData } from '../../assets/data/products/products';
import { Product } from '../../types/productsCatalog.type';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo/Index';
import Description from './Description';

const ProductDetail = () => {
    const { id } = useParams();
    const product: Product | undefined = productsData
        .find(product => product.id === Number(id));

    const navigate = useNavigate();

 
    if (!product) {
        return (
            <Layout>
                <div className="p-10 text-center text-red-600">
                    Produto não encontrado.
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex flex-col bg-white z-10 pb-4md:px-2 lg:px-4
                 overflow-y-visible">
                <i className="ml-1 bi bi-arrow-left text-md" onClick={() => navigate('/')} />

                <div className="flex flex-col lg:grid grid-cols-2">
                    <ProductGallery product={product} />

                    <ProductInfo
                        product={product}
                    />
                </div>

                <Description product={product} />
            </div>
        </Layout>
    );
};


export default ProductDetail;

import Layout from '../../components/Layout';
import WhatsappFloatingButton from '../../components/WhatsappFloatingButton';
import ProductCatalog from './ProductCatalog/Index';
import PromotionCourosel from './PromoCourocel';

const Home = () => {
  return (
    <Layout>
      <PromotionCourosel />
      <ProductCatalog />
      <WhatsappFloatingButton />
    </Layout>
  );
};

export default Home;

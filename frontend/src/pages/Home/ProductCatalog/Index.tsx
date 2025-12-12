import { useState, useEffect } from 'react';
import Toolbar from './Toolbar/Index';
import { checkSession } from '../../../mock/services/auth';
import { useUser } from '../../../context/UserContext';
import { getProducts } from '../../../mock/services/products';
import ProductList from './ProductList/Index';
import { SortBy } from '../../../types/productsCatalog.type';
import { useProductsCatalog } from '../../../context/ProductsCatalogContext';

const ProductCatalog = () => {
  const [sortBy, setSortBy] = useState<SortBy>('ascTitle');
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useUser();
  const { setProducts } = useProductsCatalog();

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const products = await getProducts();
      setProducts(products);

      const userSession = checkSession();
      if (userSession) setUser(userSession);
      setLoading(false)
    }

    load();
  }, []);

  if (loading) return <div>carregando</div>

  return (
    <section id="products" className="flex gap-6 p-3 py-3 md:px-20 md:py-4 lg:px-40">
      <Toolbar
        setSortBy={setSortBy}
      />

      <ProductList
        sortBy={sortBy}
      />
    </section>
  );
};

export default ProductCatalog;

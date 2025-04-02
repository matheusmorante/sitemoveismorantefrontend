import Header from './components/Header/Index';
import { ProductProvider } from './contexts/ProductContext';
import ProductList from './components/productList/Index';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header />
    <ProductProvider>
        <ProductList />
    </ProductProvider>
    <Footer />
    </>
  );
}

export default App;

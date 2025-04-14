import Header from './components/Header/Index';
import { ProductProvider } from './contexts/ProductContext';
import ProductList from './components/productList/Index';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import CreditCard from './pages/CreditCard';

function App() {
    return (
        <>
            <div className="min-h-screen">
                <BrowserRouter >
                    <Header />
                    <Routes>

                        <Route path='/' element={
                            <ProductProvider>
                                <ProductList />
                            </ProductProvider>
                        } />
                        <Route path='/product/:id' element={<ProductDetail />} />
                        <Route path='/crediario' element={<CreditCard/>} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </>
    );
}

export default App;

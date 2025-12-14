import Home from './pages/Home/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail/Index';
import CreditCard from './pages/CreditCard';
import Login from './pages/Login';
import Register from './pages/Register';
import { AppProviders } from './context/AppProviders';

function App() {
    return (
        <BrowserRouter>
            <AppProviders>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/crediario" element={<CreditCard />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AppProviders>
        </BrowserRouter>
    );
}

export default App;

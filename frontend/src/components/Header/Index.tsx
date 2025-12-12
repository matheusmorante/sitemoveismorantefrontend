import logo from '../../assets/logo.png';
import Profile from './Profile/Index';
import CartSidebar from './Cart/Index';
import { useCart } from '../../context/CartContext';
import CartButton from './CartButton';

const Header = () => {
  const {openCart, setOpenCart} = useCart();
  return (
    <>
      <header className="flex items-center justify-between bg-white p-2 py-3 md:px-20 
        md:py-4 lg:px-40">
        <a href="/">
          <img src={logo} className="object-cover h-5 lg:h-6" />
        </a>
        <div className='flex text-lg gap-2'>
          <CartButton />
          <Profile />
        </div>
      </header>

      {openCart &&
        <CartSidebar
          isOpen={openCart}
          onClose={() => setOpenCart(false)}
        />}
    </>
  );
}

export default Header

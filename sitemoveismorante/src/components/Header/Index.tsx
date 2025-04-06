import { useState } from 'react';
import Overlay from '../productList/Overlay';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center bg-white p-2">
            <img src={logo} className='object-cover h-5' />
            <div >
                <i
                    className="bi bi-list text-2xl lg:hidden flex item-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    role='button'
                />
                <Overlay isOpen={isMenuOpen} onClose={toggleMenu} >
                    <ul className='text-white text-center wrap'>
                        <li
                            className='mb-5'
                            onClick={e => navigate('/')}
                        >
                            Home
                        </li>
                        <li
                            className='mb-5'
                            onClick={e => navigate('/about-us')}
                        >
                            Sobre nós
                        </li>
                        <li onClick={e => navigate('/contact-us')}>
                            Contate-nos
                        </li>
                    </ul>
                </Overlay>
            </div>
            <div className="hidden lg:flex">
                <ul className='text-white text-center wrap'>
                    <li
                        className='mb-5'
                        onClick={e => navigate('/about-us')}
                    >
                        Sobre nós
                    </li>
                    <li onClick={e => navigate('/contact-us')}>
                        Contate-nos
                    </li>
                </ul>
            </div>

        </header >
    );
}

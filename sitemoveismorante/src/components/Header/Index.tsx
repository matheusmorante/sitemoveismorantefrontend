import { useState } from 'react';
import Overlay from '../Overlay';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="flex justify-between bg-white p-2
            md:px-20 lg:px-40">
            <a href='/'><img src={logo} className='object-cover h-5 lg:h-6' /></a>
            <div className='lg:hidden'>
                <i
                    className="bi bi-list text-2xl lg:hidden flex item-center"
                    onClick={() => setShowMenu(true)}
                    aria-label="Toggle menu"
                    role='button'
                />
                <Overlay isOpen={showMenu} onClose={() => setShowMenu(false)} >
                    <div className='flex flex-col text-white text-center wrap'>
                        <a
                            href='/'
                            onClick={() => setShowMenu(false)}
                            className='mb-5'
                        >
                            Home
                        </a>
                        <a
                            className='mb-5'
                            onClick={() => setShowMenu(false)}
                            href='/about-us'
                        >
                            Sobre nós
                        </a>
                        <a
                            onClick={() => setShowMenu(false)}
                            href='/contact-us'
                        >
                            Contate-nos
                        </a>
                    </div>
                </Overlay>
            </div>
            <div className="hidden lg:flex">
                <ul className='flex gap-5'>
                    <li
                        className='border-white hover:border-blue-400 border-b-2
                             cursor-pointer duration-300'
                        onClick={e => navigate('/')}
                    >
                        Home
                    </li>
                    <li
                        className='border-white hover:border-blue-400 border-b-2
                             cursor-pointer duration-300'
                        onClick={e => navigate('/about-us')}
                    >
                        Sobre nós
                    </li>
                    <li
                        className='border-white hover:border-blue-400 border-b-2
                             cursor-pointer duration-300'
                        onClick={e => navigate('/contact-us')}>
                        Contate-nos
                    </li>
                </ul>
            </div>

        </header >
    );
}

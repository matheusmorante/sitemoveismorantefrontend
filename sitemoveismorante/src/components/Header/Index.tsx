import { useState } from 'react';
import Overlay from './Overlay';
import logo from '../../assets/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow === 'hidden' ?
        document.body.style.overflow='auto' :
        document.body.style.overflow = 'hidden'
    };

    return (
        <header className="flex justify-between items-center bg-white p-2">
            <img src={logo} className='object-cover h-5'/>
            <div >
                <i className="bi bi-list text-2xl lg:hidden flex item-center" onClick={toggleMenu}
                 aria-label="Toggle menu" role='button'/>
                <Overlay isOpen={isMenuOpen} onClose={toggleMenu} >
                    <ul className='text-white text-center block gap-5'>
                        <li>Sobre nós</li>
                        <li className='mt-5'>Contato</li>
                    </ul>
                </Overlay>
            </div>
            <div className="hidden lg:flex">
                <ul >
                    <li>Sobre nós</li>
                </ul>

            </div>
        </header >
    );
}

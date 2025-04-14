import { useEffect } from "react";

interface OverlayProps {
    isOpen: Boolean;
    onClose: () => void;
    children: React.ReactNode
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'auto';
            };
        }
    }, [isOpen])

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div onClick={handleOverlayClick} className={`${isOpen === true ?
            `fixed inset-0 flex justify-center pt-10 bg-gray-800 bg-opacity-95 z-50` :
            'hidden'} `} role='dialog'>
            {children}
        </div>
    )
}

export default Overlay;

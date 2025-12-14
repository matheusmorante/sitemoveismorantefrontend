import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  align?: 'center' | 'start' | 'end'
}

const Overlay = ({ isOpen, onClose, children, align}: Props) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`${
        isOpen === true
          ? `fixed inset-0 flex ${align} bg-black bg-opacity-60 z-10`
          : 'hidden'
      } `} 
      role="dialog"
    >
      {children}
    </div>
  );
};

export default Overlay;

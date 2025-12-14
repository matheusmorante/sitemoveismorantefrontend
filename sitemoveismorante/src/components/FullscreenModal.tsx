import { useEffect } from 'react';

interface FullscreenModalProps {
  children: React.ReactNode;
  onCloseModal: () => void;
}

const FullscreenModal = ({ children, onCloseModal }: FullscreenModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-10">
      <div>
        <i className="ml-1 bi bi-arrow-left" onClick={onCloseModal} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FullscreenModal;

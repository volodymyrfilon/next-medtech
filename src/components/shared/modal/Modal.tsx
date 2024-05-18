'use client';
import { MouseEvent, useEffect } from 'react';

import { X } from 'lucide-react';
import ClientOnlyPortal from '../../../../utils/ClientOnlyPortal';
import { ModalProps } from './Modal.props';

const Modal = ({ onClose, children, className, scroll = false }: ModalProps) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown as unknown as EventListener);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown as unknown as EventListener);
    };
  }, [onClose]);

  return (
    <ClientOnlyPortal selector="#modal">
      <div
        className="fixed inset-0 z-[99] flex items-center justify-center bg-accent-dark/60 p-10"
        onClick={handleBackdropClick}
      >
        <div
          className={`modal-animation relative h-auto max-h-screen bg-white px-24 py-20 ${className}`}
        >
          <button
            className="absolute right-4 top-4 h-5 w-5"
            onClick={onClose}
            aria-label="Закрити вікно"
          >
            <X className="h-6 w-6 text-accent-dark" />
          </button>
          <div className={` ${scroll ? 'scrollbar h-[600px] overflow-y-scroll' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;

'use client';
import { MouseEvent, useEffect } from 'react';

import { Button } from '@/components/ui/button';
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
        className="bg-backdrop fixed inset-0 z-[99] flex items-center justify-center p-10"
        onClick={handleBackdropClick}
      >
        <div
          className={`modal-animation relative h-auto max-h-screen bg-white px-24 py-20 ${className}`}
        >
          <Button
            variant="icon"
            className="absolute right-10 top-[35px] h-5 w-5 lg:top-10"
            onClick={onClose}
            aria-label="Закрити вікно"
          >
            <X className="h-6 w-6 text-accent-dark" />
          </Button>
          <div className={` ${scroll ? 'scrollbar h-[600px] overflow-y-scroll' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;

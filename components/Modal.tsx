
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-zinc-800 shrink-0">
          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

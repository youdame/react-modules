import { createContext, useContext } from 'react';

type ModalContextType = {
  onClose: () => void;
  position: 'bottom' | 'center';
  size: 'small' | 'medium' | 'large';
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

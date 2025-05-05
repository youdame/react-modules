import { ReactNode } from 'react';
import { ComponentProps } from 'react';
import ModalPortal from './ModalPortal';
import useEscClick from '../lib/hooks/useEscKey';
import useScrollBlock from '../lib/hooks/useScrollBlock';
import { ModalContext, useModalContext } from './ModalContext';
import { BackDrop, ModalWrapper } from './Modal.styles';
import { useClickAway } from './hooks/useClickAway';

function ModalMain({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode } & ComponentProps<'div'>) {
  useEscClick(onClose);
  useScrollBlock(isOpen);

  return (
    <ModalContext.Provider value={{ onClose }}>
      <ModalPortal>{children}</ModalPortal>
    </ModalContext.Provider>
  );
}

function ModalBackDrop({ ...props }: ComponentProps<'div'>) {
  return <BackDrop {...props} />;
}

function ModalContent({
  children,
  position,
  ...props
}: {
  children: ReactNode;
  position: 'center' | 'bottom';
} & ComponentProps<'div'>) {
  const { onClose } = useModalContext();
  const outsideRef = useClickAway<HTMLDivElement>(onClose);

  return (
    <ModalWrapper position={position} ref={outsideRef} {...props}>
      {children}
    </ModalWrapper>
  );
}

function ModalTitle({ children, ...props }: { children: ReactNode } & ComponentProps<'h2'>) {
  return <h2 {...props}>{children}</h2>;
}

function ModalCloseButton({ children, ...props }: { children: ReactNode } & ComponentProps<'button'>) {
  const { onClose } = useModalContext();
  return (
    <button onClick={onClose} {...props}>
      {children}
    </button>
  );
}

function ModalButton({ onClick, children, ...props }: { onClick: () => void; children: ReactNode } & ComponentProps<'button'>) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const Modal = Object.assign(ModalMain, {
  BackDrop: ModalBackDrop,
  Content: ModalContent,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Button: ModalButton
});

export default Modal;

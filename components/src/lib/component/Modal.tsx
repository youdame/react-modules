import ModalPortal from '../ModalPortal';
import useScrollBlock from '../hooks/useScrollBlock';
import { ModalContext, useModalContext } from '../ModalContext';
import { BackDrop, ModalWrapper, StyledFooter } from './Modal.styles';
import { useClickAway } from '../hooks/useClickAway';
import { ModalBackDropProps, ModalCloseButtonProps, ModalContentProps, ModalFooterProps, ModalMainProps, ModalTitleProps } from '../type/Modal.types';
import useEscKeydown from '../hooks/useEscKeydown';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function ModalMain({ isOpen, size, onClose, position, children }: ModalMainProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEscKeydown(onClose);
  useScrollBlock(isOpen);

  // create div for portal
  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
  }

  // append to body
  useEffect(() => {
    const el = containerRef.current!;
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  if (!isOpen) return null;
  console.log(containerRef.current);
  return createPortal(<ModalContext.Provider value={{ onClose, position, size }}>{children}</ModalContext.Provider>, containerRef.current);
}

function ModalBackDrop({ ...props }: ModalBackDropProps) {
  return <BackDrop {...props} />;
}

function ModalContent({ children, ...props }: ModalContentProps) {
  const { onClose, position, size } = useModalContext();
  const outsideRef = useClickAway<HTMLDivElement>(onClose);

  return (
    <ModalWrapper size={size} position={position} ref={outsideRef} {...props}>
      {children}
    </ModalWrapper>
  );
}

function ModalTitle({ children, ...props }: ModalTitleProps) {
  return <p {...props}>{children}</p>;
}

function ModalCloseButton({ children, ...props }: ModalCloseButtonProps) {
  const { onClose } = useModalContext();
  return (
    <button onClick={onClose} {...props}>
      {children}
    </button>
  );
}

function ModalFooter({ align = 'right', children, ...props }: ModalFooterProps) {
  return (
    <StyledFooter align={align} {...props}>
      {children}
    </StyledFooter>
  );
}

const Modal = Object.assign(ModalMain, {
  BackDrop: ModalBackDrop,
  Content: ModalContent,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Footer: ModalFooter
});

export default Modal;

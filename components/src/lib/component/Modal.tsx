import ModalPortal from '../ModalPortal';
import useScrollBlock from '../hooks/useScrollBlock';
import { ModalContext, useModalContext } from '../ModalContext';
import { BackDrop, ModalWrapper } from './Modal.styles';
import { useClickAway } from '../hooks/useClickAway';
import { ModalBackDropProps, ModalButtonProps, ModalCloseButtonProps, ModalContentProps, ModalMainProps, ModalTitleProps } from '../type/Modal.types';
import useEscKeydown from '../hooks/useEscKeydown';
import { createPortal } from 'react-dom';
import ActionButton from '../CTAButton.tsx/CTAButton';
import CTAButton from '../CTAButton.tsx/CTAButton';

function ModalMain({ isOpen, size, onClose, position, children }: ModalMainProps) {
  useEscKeydown(onClose);
  useScrollBlock(isOpen);

  if (!isOpen) return null;
  return (
    <ModalContext.Provider value={{ onClose, position, size }}>
      <ModalPortal>{children}</ModalPortal>
    </ModalContext.Provider>
  );
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
  return <h2 {...props}>{children}</h2>;
}

function ModalCloseButton({ children, ...props }: ModalCloseButtonProps) {
  const { onClose } = useModalContext();
  return (
    <button onClick={onClose} {...props}>
      {children}
    </button>
  );
}

function ModalCTAButton({ onClick, children, ...props }: ModalButtonProps) {
  return (
    <CTAButton onClick={onClick} {...props}>
      {children}
    </CTAButton>
  );
}

function ModalActionButton({ onClick, children, ...props }: ModalButtonProps) {
  return (
    <ActionButton onClick={onClick} {...props}>
      {children}
    </ActionButton>
  );
}

const Modal = Object.assign(ModalMain, {
  BackDrop: ModalBackDrop,
  Content: ModalContent,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  CTAButton: ModalCTAButton
});

export default Modal;

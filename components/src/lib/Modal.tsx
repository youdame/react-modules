import ModalPortal from './ModalPortal';
import useEscClick from '../lib/hooks/useEscKey';
import useScrollBlock from '../lib/hooks/useScrollBlock';
import { ModalContext, useModalContext } from './ModalContext';
import { BackDrop, ModalWrapper } from './Modal.styles';
import { useClickAway } from './hooks/useClickAway';
import { ModalBackDropProps, ModalButtonProps, ModalCloseButtonProps, ModalContentProps, ModalMainProps, ModalTitleProps } from './Modal.types';

function ModalMain({ isOpen, onClose, children }: ModalMainProps) {
  useEscClick(onClose);
  useScrollBlock(isOpen);

  return (
    <ModalContext.Provider value={{ onClose }}>
      <ModalPortal>{children}</ModalPortal>
    </ModalContext.Provider>
  );
}

function ModalBackDrop({ ...props }: ModalBackDropProps) {
  return <BackDrop {...props} />;
}

function ModalContent({ children, position, ...props }: ModalContentProps) {
  const { onClose } = useModalContext();
  const outsideRef = useClickAway<HTMLDivElement>(onClose);

  return (
    <ModalWrapper position={position} ref={outsideRef} {...props}>
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

function ModalButton({ onClick, children, ...props }: ModalButtonProps) {
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

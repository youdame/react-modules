import { MouseEvent, ReactNode, useRef } from 'react';
import * as S from './Modal.styles';
import { ComponentProps } from 'react';

function ModalMain({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function ModalBackDrop({ onClose, ...props }: { onClose: () => void }) {
  const outsideRef = useRef<HTMLDivElement>(null);
  const handleBackClick = (e: MouseEvent<HTMLDivElement>) => {
    if (outsideRef.current === e.target) {
      onClose();
    }
  };
  return <S.BackDrop {...props} ref={outsideRef} onClick={handleBackClick} />;
}

function ModalContent({
  children,
  position,
  ...props
}: {
  children: ReactNode;
  position: 'center' | 'bottom';
} & ComponentProps<'div'>) {
  return (
    <S.ModalWrapper position={position} {...props}>
      {children}
    </S.ModalWrapper>
  );
}

function ModalTitle({ children }: { children: ReactNode }) {
  return <S.ModalTitle>{children}</S.ModalTitle>;
}

function ModalCloseButton({ onClick, children, ...props }: { onClick: () => void; children: ReactNode } & ComponentProps<'button'>) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

function ModalButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return <button onClick={onClick}>{children}</button>;
}

const Modal = Object.assign(ModalMain, {
  BackDrop: ModalBackDrop,
  Content: ModalContent,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Button: ModalButton
});

export default Modal;

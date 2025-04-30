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

const Modal = Object.assign(ModalMain, {
  BackDrop: ModalBackDrop,
  Content: ModalContent
});

export default Modal;

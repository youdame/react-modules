import { ReactNode } from 'react';
import * as S from './Modal.styles';
import { ComponentProps } from 'react';

function ModalMain({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
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
  Content: ModalContent
});

export default Modal;

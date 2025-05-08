import ModalPortal from '../ModalPortal';
import useScrollBlock from '../hooks/useScrollBlock';
import { ModalContext, useModalContext } from '../ModalContext';
import { BackDrop, ModalWrapper } from './Modal.styles';
import { useClickAway } from '../hooks/useClickAway';
import { ModalBackDropProps, ModalButtonProps, ModalCloseButtonProps, ModalContentProps, ModalMainProps, ModalTitleProps } from '../type/Modal.types';
import useEscKeydown from '../hooks/useEscKeydown';
import CTAButton from '../CTAButton.tsx/CTAButton';
import styled from '@emotion/styled';
import ActionButton from '../ActionButton/ActionButton';
import { ComponentProps } from 'react';

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

type ModalFooterProps = {
  align?: 'left' | 'center' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;

const justifyMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
} as const;

const StyledFooter = styled.div<{ align?: ModalFooterProps['align'] }>`
  display: flex;
  justify-content: ${({ align = 'right' }) => justifyMap[align]};
  gap: 12px;
`;

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

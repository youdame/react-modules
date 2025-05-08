import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const ModalWrapper = styled.div<{
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
}>`
  position: fixed;
  top: ${({ position }) => (position === 'bottom' ? 'auto' : '50%')};
  bottom: ${({ position }) => (position === 'bottom' ? '5%' : 'auto')};
  left: 50%;
  background-color: white;
  transform: ${({ position }) => (position === 'bottom' ? 'translateX(-50%)' : 'translate(-50%, -50%)')};
  z-index: 1;
  width: ${({ size }) => (size === 'small' ? '320px' : size === 'large' ? '600px' : '480px')};
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

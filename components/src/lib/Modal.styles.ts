import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const ModalWrapper = styled.div<{ position: 'center' | 'bottom' }>`
  position: fixed;
  left: 50%;
  top: ${(props) => props.position === 'center' && '50%'};
  bottom: ${(props) => props.position === 'bottom' && '0'};
  transform: ${(props) => (props.position === 'center' ? 'translate(-50%, -50%)' : 'translate(-50%, 0)')};
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

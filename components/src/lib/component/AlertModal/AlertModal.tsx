import Modal from '../Modal';
import { CustomBackDrop, ModalTitle } from '../Modal.styles';
import CTAButton from '../CTAButton.tsx/CTAButton';
import { ModalSizeType } from '../../type/Modal.types';

interface AlertModalProps {
  size?: ModalSizeType;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  confirmText?: string;
}

export default function AlertModal({ size = 'medium', isOpen, onClose, title = '알림', message, confirmText = '확인' }: AlertModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position="center" size={size}>
      <CustomBackDrop />
      <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '8px', gap: '12px' }}>
        {title && <ModalTitle>{title}</ModalTitle>}
        <p>{message}</p>
        <Modal.Footer>
          <CTAButton autoFocus onClick={onClose}>
            {confirmText}
          </CTAButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

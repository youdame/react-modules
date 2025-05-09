import ActionButton from '../ActionButton/ActionButton';
import CTAButton from '../CTAButton.tsx/CTAButton';
import Modal from '../Modal';
import { CustomBackDrop, ModalTitle } from '../Modal.styles';
import { ModalSizeType } from '../../type/Modal.types';

interface ConfirmModalProps {
  size?: ModalSizeType;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
}

export default function ConfirmModal({
  size = 'medium',
  isOpen,
  onClose,
  title,
  message,
  cancelText = '취소',
  confirmText = '확인',
  onConfirm
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position="center" size={size}>
      <CustomBackDrop />
      <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '8px', gap: '12px' }}>
        <ModalTitle>{title}</ModalTitle>
        <p>{message}</p>
        <Modal.Footer>
          <ActionButton autoFocus onClick={onClose}>
            {cancelText}
          </ActionButton>
          <CTAButton
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </CTAButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

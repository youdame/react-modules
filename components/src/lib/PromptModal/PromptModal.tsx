import { useState } from 'react';
import Modal from '../component/Modal';
import { CustomBackDrop, ModalTitle } from '../component/Modal.styles';
import ModalInput from '../component/Input/input';
import ActionButton from '../component/ActionButton/ActionButton';
import CTAButton from '../component/CTAButton.tsx/CTAButton';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  placeholder?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: (value: string) => void;
}

export default function PromptModal({
  isOpen,
  onClose,
  title = '입력',
  placeholder = '',
  cancelText = '취소',
  confirmText = '확인',
  onConfirm
}: PromptModalProps) {
  const [value, setValue] = useState('');

  return (
    <Modal isOpen={isOpen} onClose={onClose} position="center" size="small">
      <CustomBackDrop />
      <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '8px', gap: '12px' }}>
        <ModalTitle>{title}</ModalTitle>
        <ModalInput placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        <Modal.Footer>
          <ActionButton onClick={onClose}>{cancelText}</ActionButton>
          <CTAButton
            onClick={() => {
              onConfirm?.(value);
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

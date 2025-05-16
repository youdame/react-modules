import { useState } from 'react';
import Modal from '../Modal';
import { CustomBackDrop, ModalTitle } from '../Modal.styles';
import ModalInput from '../Input/input';
import Button from '../Button/Button';

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
        <ModalInput autoFocus placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        <Modal.Footer>
          <Button onClick={onClose}>{cancelText}</Button>
          <Button
            onClick={() => {
              onConfirm?.(value);
              onClose();
            }}
          >
            {confirmText}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

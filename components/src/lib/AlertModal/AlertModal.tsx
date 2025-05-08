import Modal from '../component/Modal';

export default function AlertModal({ isOpen, onClose, message }: { isOpen: boolean; onClose: () => void; message: string }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.BackDrop />
      <Modal.Content position="center">
        <Modal.Title>알림</Modal.Title>
        <p>{message}</p>
        <Modal.Button onClick={onClose}>확인</Modal.Button>
      </Modal.Content>
    </Modal>
  );
}

import { useState } from 'react';
import './App.css';

import Modal from './lib/component/Modal';
import styled from '@emotion/styled';
import ModalInput from './lib/component/Input/input';
import CTAButton from './lib/CTAButton.tsx/CTAButton';
import ActionButton from './lib/ActionButton/ActionButton';

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const CustomBackDrop = styled(Modal.BackDrop)`
    background-color: rgba(0, 0, 255, 0.35);
  `;

  return (
    <div style={{ padding: '40px', display: 'flex', gap: '16px' }}>
      <button onClick={() => setIsOpen1(true)}>모달 1 열기</button>
      <Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)} position="center" size="large">
        <CustomBackDrop />
        <Modal.Content style={{ backgroundColor: 'white', gap: '12px', padding: '24px 32px', borderRadius: '8px' }}>
          <Modal.Title>아이디를 입력해 주세요.</Modal.Title>
          <p>아이디는 필수로 입력해야 합니다.</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CTAButton onClick={() => setIsOpen1(false)}>확인</CTAButton>
          </div>
        </Modal.Content>
      </Modal>

      <button onClick={() => setIsOpen2(true)}>모달 2 열기</button>
      <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)} position="center" size="medium">
        <CustomBackDrop />
        <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', gap: '12px', borderRadius: '8px' }}>
          <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
          <p>삭제하면 복구하실 수 없습니다.</p>
          <Modal.Footer>
            <ActionButton onClick={() => setIsOpen2(false)}>취소</ActionButton>
            <CTAButton onClick={() => setIsOpen2(false)}>확인</CTAButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <button onClick={() => setIsOpen3(true)}>모달 3 열기</button>
      <Modal isOpen={isOpen3} onClose={() => setIsOpen3(false)} position="center" size="small">
        <CustomBackDrop />
        <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', gap: '12px', borderRadius: '8px' }}>
          <div>
            <Modal.Title>쿠폰 번호를 입력해 주세요.</Modal.Title>
            <ModalInput></ModalInput>
          </div>
          <Modal.Footer>
            <ActionButton onClick={() => setIsOpen3(false)}>취소</ActionButton>
            <CTAButton onClick={() => setIsOpen3(false)}>확인</CTAButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;

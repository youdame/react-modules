import { useState } from 'react';
import './App.css';

import Modal from './lib/component/Modal';
import styled from '@emotion/styled';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const CustomBackDrop = styled(Modal.BackDrop)`
    background-color: rgba(0, 0, 255, 0.35);
  `;

  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleButtonToggle} position="center" size="large">
        <CustomBackDrop />
        <Modal.Content style={{ backgroundColor: 'white', padding: '24px 36px', borderRadius: '8px' }}>
          <Modal.Title>아이디를 입력해 주세요.</Modal.Title>
          <p>아이디는 필수로 입력해야 합니다.</p>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Modal.CTAButton onClick={handleButtonToggle}>확인</Modal.CTAButton>
          </div>
        </Modal.Content>
      </Modal>

      <button onClick={handleButtonToggle}>모달 열기</button>
    </div>
  );
}

export default App;

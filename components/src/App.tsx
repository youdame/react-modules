import { useState } from 'react';

import './App.css';
import Modal from './lib/Modal';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleButtonToggle}>모달 열기</button>
      {isOpen && (
        <Modal>
          <Modal.BackDrop onClose={handleButtonToggle} />
          <Modal.Content position="center" className="test">
            <h1>모달</h1>
            <p>모달 내용</p>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
}

export default App;

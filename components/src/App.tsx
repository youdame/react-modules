import { useState } from 'react';
import './App.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleButtonToggle}>모달 열기</button>
    </>
  );
}

export default App;

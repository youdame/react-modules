import './App.css';
import useCardNumber from './lib/cardNumber/useCardNumber';
import { useEffect } from 'react';

function App() {
  const { cardNumber, errorState, handleCardNumberChange } = useCardNumber();
  useEffect(() => {
    console.log(errorState.errorState);
  }, [errorState.errorState]);
  return (
    <>
      <input value={cardNumber.first} onChange={(e) => handleCardNumberChange(e, 'first')}></input>
      <input value={cardNumber.second} onChange={(e) => handleCardNumberChange(e, 'second')}></input>
      <input value={cardNumber.third} onChange={(e) => handleCardNumberChange(e, 'third')}></input>
      <input value={cardNumber.fourth} onChange={(e) => handleCardNumberChange(e, 'fourth')}></input>
      <p>{errorState.errorMessage}</p>
    </>
  );
}

export default App;

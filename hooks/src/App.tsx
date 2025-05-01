import './App.css';
import useCardNumber from './lib/cardNumber/useCardNumber';
import { useEffect } from 'react';
import useExpiration from './lib/expiration/useExpiration';

function App() {
  // const { cardNumber, errorState, handleCardNumberChange } = useCardNumber();
  const { expiration, errorState, handleExpirationChange } = useExpiration();
  useEffect(() => {
    console.log(errorState.errorState);
  }, [errorState.errorState]);

  return (
    <>
      <input value={expiration.month} onChange={(e) => handleExpirationChange(e, 'month')}></input>
      <input value={expiration.year} onChange={(e) => handleExpirationChange(e, 'year')}></input>
      {/* <input value={cardNumber.third} onChange={(e) => handleCardNumberChange(e, 'third')}></input>
      <input value={cardNumber.fourth} onChange={(e) => handleCardNumberChange(e, 'fourth')}></input> */}
      <p>{errorState.errorMessage}</p>
    </>
  );
}

export default App;

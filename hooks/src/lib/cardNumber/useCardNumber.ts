import { useState } from 'react';
import validateCardNumber from './validateCardNumber';
import { initialCardNumberState } from '../constants/cardNumber';
import { CardNumberStateKey, CarNumberStateType } from '../types/cardNumber';

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState<CarNumberStateType>(initialCardNumberState);

  const handleCardNumberChange = (value: string, field: CardNumberStateKey) => {
    setCardNumber((prev) => ({ ...prev, [field]: value }));
  };

  return {
    cardNumber,
    errorState: validateCardNumber(cardNumber),
    handleCardNumberChange
  };
}

export default useCardNumber;

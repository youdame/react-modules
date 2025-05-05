import { ChangeEvent, useState } from 'react';
import validateCardNumber from './validateCardNumber';

export type CarNumberStateType = typeof initialCardNumberState;

const initialCardNumberState = {
  first: '',
  second: '',
  third: '',
  fourth: ''
};

export type CardNumberStateKey = keyof CarNumberStateType;

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

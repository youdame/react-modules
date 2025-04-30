import { ChangeEvent, useRef, useState } from 'react';
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

  const currentField = useRef<CardNumberStateKey | null>(null);

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>, field: CardNumberStateKey) => {
    const value = e.target.value;
    setCardNumber((prev) => ({ ...prev, [field]: value }));
    currentField.current = field;
  };

  return {
    cardNumber,
    field: currentField.current,
    errorState: validateCardNumber(cardNumber),
    handleCardNumberChange
  };
}

export default useCardNumber;

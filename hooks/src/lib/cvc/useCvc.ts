import { useState } from 'react';
import validateCvc from './validateCvc';

function useCvc() {
  const [cvc, setCvc] = useState<string>('');

  const handleCvcChange = (value: string) => {
    setCvc(value);
  };

  return {
    cvc,
    errorState: validateCvc(cvc),
    handleCvcChange
  };
}

export default useCvc;

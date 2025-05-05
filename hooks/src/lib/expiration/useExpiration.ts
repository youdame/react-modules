import { useState } from 'react';
import validateExpiration from './validateExpiration';
import { initialExpirationState } from '../constants/expiration';
import { ExpirationStateKey, ExpirationStateType } from '../types/expiration';

function useExpiration() {
  const [expiration, setExpiration] = useState<ExpirationStateType>(initialExpirationState);

  const handleExpirationChange = (value: string, field: ExpirationStateKey) => {
    setExpiration((prev) => ({ ...prev, [field]: value }));
  };

  return {
    expiration,
    errorState: validateExpiration(expiration),
    handleExpirationChange
  };
}

export default useExpiration;

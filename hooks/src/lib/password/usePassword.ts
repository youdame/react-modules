import { useState } from 'react';
import validatePassword from './validatePassword';

function usePassword() {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return {
    password,
    errorState: validatePassword(password),
    handlePasswordChange
  };
}

export default usePassword;

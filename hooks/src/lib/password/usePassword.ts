import { useState } from 'react';
import validatePassword from './validatePassword';
/**
 * 비밀번호 앞 두 자리 입력을 관리하고 유효성 검사를 수행하는 훅입니다.
 *
 * @returns {{
 *   password: string;
 *   errorState: { errorState: boolean; errorMessage: string };
 *   handlePasswordChange: (value: string) => void;
 * }}
 */

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

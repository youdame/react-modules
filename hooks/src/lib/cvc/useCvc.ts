import { useState } from 'react';
import validateCvc from './validateCvc';
/**
 * CVC(Card Verification Code) 입력 상태를 관리하고 유효성 검사를 수행하는 훅입니다.
 *
 * @returns {{
 *   cvc: string; // 현재 입력된 CVC 값
 *   errorState: { errorState: boolean; errorMessage: string }; // 유효성 검사 결과
 *   handleCvcChange: (value: string) => void; // CVC 입력 변경 핸들러
 * }}
 */
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

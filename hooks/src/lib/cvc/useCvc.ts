import { useState } from 'react';
import validateCvc from './validateCvc';
/**
 * CVC 입력을 관리하고 유효성을 검증하는 커스텀 훅입니다.
 *
 * - 3자리 숫자 형식의 CVC만 허용됩니다.
 * - 에러 메시지는 `errorState`를 통해 제공됩니다.


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

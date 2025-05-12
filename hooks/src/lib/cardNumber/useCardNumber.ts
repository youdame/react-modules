import { useState } from 'react';
import { detectCardCompany, formatCardNumber } from '../CardCompany/checkCompany';
import { validateCardNumber } from './validateCardNumber';

/**
 * 카드 번호 입력 상태를 관리하고 유효성 검사를 수행하는 커스텀 훅입니다.
 *
 * - 카드 번호는 총 16자리이며, 4자리씩 분할 입력됩니다 (`first`, `second`, `third`, `fourth`).
 * - 숫자만 입력 가능하며, 각 필드는 4자리 숫자를 받아야 유효합니다.
 *
 * @returns {{
 *   cardNumber: CardNumberStateType; // 현재 입력된 카드 번호 상태 (4개의 필드로 구성)
 *   errorState: { errorState: boolean; errorMessage: string }; // 유효성 검사 결과
 *   handleCardNumberChange: (value: string, field: CardNumberStateKey) => void; // 카드 번호 입력 핸들러
 * }}
 */

function useCardNumber() {
  const [rawValue, setRawValue] = useState('');
  const company = detectCardCompany(rawValue);
  const formatted = formatCardNumber(rawValue, company);
  const validationResult = validateCardNumber(rawValue, company);

  const handleCardNumberChange = (input: string) => {
    const clean = input.replace(/\D/g, '');
    setRawValue(clean);
  };

  return {
    cardNumber: formatted,
    company,
    errorState: validationResult,
    handleCardNumberChange
  };
}

export default useCardNumber;

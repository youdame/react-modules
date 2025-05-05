import { useState } from 'react';
import validateExpiration from './validateExpiration';
import { initialExpirationState } from '../constants/expiration';
import { ExpirationStateKey, ExpirationStateType } from '../types/expiration';

/**
 * 카드 유효기간 상태 및 유효성 검사를 처리하는 훅입니다.
 *
 * @returns
 * - expiration: 현재 입력된 유효기간 상태 (month, year)
 * - errorState: 유효성 검사 결과
 * - handleExpirationChange: 입력값 변경 핸들러
 */

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

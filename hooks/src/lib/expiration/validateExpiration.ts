import { ExpirationStateType } from '../types/expiration';
import validation from '../validation';

const validateExpiration = (expiration: ExpirationStateType) => {
  const { errorState, errorMessage } = Object.entries(expiration).reduce(
    (acc, [key, value]) => {
      if (value === '') return acc;

      if (!validation.isNumber(value)) {
        return {
          errorState: { ...acc.errorState, [key]: true },
          errorMessage: '숫자만 입력하세요.'
        };
      }

      if (!validation.isValidLength(value, 2)) {
        return {
          errorState: { ...acc.errorState, [key]: true },
          errorMessage: '2자리 숫자를 입력하세요.'
        };
      }

      if (key === 'month' && !validation.isValidMonth(value)) {
        return {
          errorState: { ...acc.errorState, month: true },
          errorMessage: '유효한 월을 입력하세요.'
        };
      }

      if (key === 'year' && !validation.isValidYear(value)) {
        return {
          errorState: { ...acc.errorState, year: true },
          errorMessage: '유효한 연도를 입력하세요.'
        };
      }

      return acc;
    },
    { errorState: { year: false, month: false }, errorMessage: '' }
  );

  if (
    expiration.month !== '' &&
    expiration.year !== '' &&
    !validation.isValidateDate(expiration.month, expiration.year)
  ) {
    return {
      errorState: { ...errorState, year: true },
      errorMessage: '지나지 않은 날짜를 입력해주세요.'
    };
  }

  return { errorState, errorMessage };
};

export default validateExpiration;

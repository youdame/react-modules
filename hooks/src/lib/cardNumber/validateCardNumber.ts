import validation from '../validation';
import { CardNumberStateKey, CarNumberStateType } from './useCardNumber';

const validateCardNumber = (cardNumber: CarNumberStateType) => {
  const { errorState, errorMessage } = Object.entries(cardNumber).reduce(
    (acc, [k, value]) => {
      const key = k as CardNumberStateKey;
      if (!validation.isNumber(value) && value !== '') {
        return {
          errorState: { ...acc.errorState, [key]: true },
          errorMessage: '숫자만 입력하세요.'
        };
      }

      if (!validation.isValidLength(value, 4) && value !== '') {
        return {
          errorState: { ...acc.errorState, [key]: true },
          errorMessage: '4자리 숫자를 입력하세요.'
        };
      }
      return acc;
    },
    { errorState: { first: false, second: false, third: false, fourth: false }, errorMessage: '' }
  );

  return { errorState, errorMessage };
};

export default validateCardNumber;

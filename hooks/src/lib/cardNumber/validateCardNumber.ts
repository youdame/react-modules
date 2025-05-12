import { CARD_RULES } from '../CardCompany/checkCompany';
import { CardCompany } from '../types/cardCompany';

export function validateCardNumber(
  cardNumber: string,
  company: CardCompany
): {
  errorState: boolean;
  errorMessage: string;
} {
  const digitsOnly = cardNumber.replace(/\D/g, '');

  if (digitsOnly.length === 0) {
    return { errorState: false, errorMessage: '' };
  }

  if (!/^\d*$/.test(digitsOnly)) {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  const expectedLength = CARD_RULES.find((rule) => rule.company === company)?.validLength;

  if (expectedLength && digitsOnly.length !== expectedLength) {
    return {
      errorState: true,
      errorMessage: `${company} 카드는 ${expectedLength}자리 숫자를 입력하세요.`
    };
  }

  return { errorState: false, errorMessage: '' };
}

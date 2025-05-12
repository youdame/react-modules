import { CARD_RULES } from '../CardCompany/checkCompany';
import { CardCompany } from '../types/cardCompany';

export function validateCardNumber(
  cardNumber: string,
  company: CardCompany
): {
  errorState: boolean;
  errorMessage: string;
} {
  const clean = cardNumber.replace(/\D/g, '');

  if (clean.length === 0) {
    return { errorState: false, errorMessage: '' };
  }

  if (!/^\d*$/.test(clean)) {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  const expectedLength = CARD_RULES.find((rule) => rule.company === company)?.validLength;

  if (expectedLength && clean.length !== expectedLength) {
    return {
      errorState: true,
      errorMessage: `${company} 카드는 ${expectedLength}자리 숫자를 입력하세요.`
    };
  }

  return { errorState: false, errorMessage: '' };
}

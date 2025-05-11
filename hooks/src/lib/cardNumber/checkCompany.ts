import { CardNumberStateType } from '../types/cardNumber';

export const checkCardCompany = (cardNumber: CardNumberStateType): string | null => {
  const fullNumber = Object.values(cardNumber).join('');

  if (fullNumber.startsWith('36') && fullNumber.length === 14) return 'Diners';
  if ((fullNumber.startsWith('34') || fullNumber.startsWith('37')) && fullNumber.length === 15) return 'AMEX';

  if (fullNumber.length === 16) {
    return null;
  }

  const sixDigits = parseInt(fullNumber.slice(0, 6), 10);
  const threeDigits = parseInt(fullNumber.slice(0, 3), 10);
  const fourDigits = parseInt(fullNumber.slice(0, 4), 10);

  if (
    (sixDigits >= 622126 && sixDigits <= 622925) ||
    (threeDigits >= 624 && threeDigits <= 626) ||
    (fourDigits >= 6282 && fourDigits <= 6288)
  ) {
    return 'UnionPay';
  }
  if (fullNumber.startsWith('4')) {
    return 'Visa';
  }

  if (parseInt(fullNumber.slice(0, 2), 10) >= 51 && parseInt(fullNumber.slice(0, 2), 10) <= 55) {
    return 'MasterCard';
  }

  return null;
};

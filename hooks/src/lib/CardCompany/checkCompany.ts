import { CardCompany } from '../types/cardCompany';

export const CARD_RULES: {
  company: CardCompany;
  pattern: RegExp;
  validLength: number;
}[] = [
  { company: 'Visa', pattern: /^4/, validLength: 16 },
  { company: 'MasterCard', pattern: /^5[1-5]/, validLength: 16 },
  { company: 'AMEX', pattern: /^3[47]/, validLength: 15 },
  { company: 'Diners', pattern: /^36/, validLength: 14 },
  {
    company: 'UnionPay',
    pattern: /^(622(12[6-9]|1[3-9]\d|[2-8]\d{2}|9[0-2][0-5])|62[4-6]|628[2-8])/,
    validLength: 16
  }
];

export const CARD_FORMAT_BLOCKS: Record<CardCompany, number[]> = {
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  AMEX: [4, 6, 5],
  Diners: [4, 6, 4],
  UnionPay: [4, 4, 4, 4],
  Unknown: [4, 4, 4, 4]
};

export const detectCardCompany = (number: string): CardCompany => {
  const clean = number.replace(/\D/g, '');
  for (const rule of CARD_RULES) {
    if (rule.pattern.test(clean) && clean.length <= rule.validLength) return rule.company;
  }
  return 'Unknown';
};

export const formatCardNumber = (input: string, company: CardCompany) => {
  const clean = input.replace(/\D/g, '');
  const blocks = CARD_FORMAT_BLOCKS[company];

  return blocks
    .map((blockSize, i, arr) => {
      const start = arr.slice(0, i).reduce((acc, len) => acc + len, 0);
      return clean.slice(start, start + blockSize);
    })
    .filter(Boolean)
    .join('-');
};

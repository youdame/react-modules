const MIN_MONTH = 1;
const MAX_MONTH = 12;
const CARD_NUMBER_LENGTH = 4;
const CURRENT_YEAR = new Date().getFullYear() % 100;
const REGEX_ONLY_NUMBERS = /^[0-9]+$/;

const validation = {
  isNumber: (value: string): boolean => {
    return REGEX_ONLY_NUMBERS.test(value);
  },

  isValidLength: (value: string, length: number = CARD_NUMBER_LENGTH): boolean => {
    return value.length === length;
  },

  isValidMonth: (value: string): boolean => {
    const numericMonth = Number(value);
    return numericMonth >= MIN_MONTH && numericMonth <= MAX_MONTH;
  },

  isValidYear: (value: string): boolean => {
    const numericYear = Number(value);
    return numericYear >= CURRENT_YEAR;
  },

  isValidateDate: (month: string, year: string): boolean => {
    const numericMonth = Number(month);
    const numericYear = Number(year);

    if (numericYear === CURRENT_YEAR) {
      const currentMonth = new Date().getMonth() + 1;
      return numericMonth >= currentMonth;
    }

    return true;
  }
};

export default validation;

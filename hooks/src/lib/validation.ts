const validation = {
  isNumber: (value: string) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  },
  isValidLength: (value: string, length: number) => {
    return value.length === length;
  },
  isValidateDate: (month: string, year: string) => {
    const numericMonth = Number(month);
    const numericYear = Number(year);
    if (numericMonth < 1 || numericMonth > 12) {
      return false;
    }
    const currentYear = new Date().getFullYear() % 100;

    if (currentYear > numericYear) {
      return false;
    }

    if (currentYear === numericYear) {
      const currentMonth = new Date().getMonth() + 1;
      if (currentMonth > numericMonth) {
        return false;
      }
    }
  }
};

export default validation;

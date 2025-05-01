declare const validation: {
    isNumber: (value: string) => boolean;
    isValidLength: (value: string, length: number) => boolean;
    isValidMonth: (value: string) => boolean;
    isValidYear: (value: string) => boolean;
    isValidateDate: (month: string, year: string) => boolean;
};
export default validation;

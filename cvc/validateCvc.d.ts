declare const validateCvc: (cvc: string) => {
    errorState: boolean;
    errorMessage: string;
};
export default validateCvc;

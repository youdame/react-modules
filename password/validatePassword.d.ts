declare const validatePassword: (password: string) => {
    errorState: boolean;
    errorMessage: string;
};
export default validatePassword;

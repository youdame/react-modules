import { CarNumberStateType } from './useCardNumber';
declare const validateCardNumber: (cardNumber: CarNumberStateType) => {
    errorState: {
        first: boolean;
        second: boolean;
        third: boolean;
        fourth: boolean;
    };
    errorMessage: string;
};
export default validateCardNumber;

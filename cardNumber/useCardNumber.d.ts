import { ChangeEvent } from 'react';
export type CarNumberStateType = typeof initialCardNumberState;
declare const initialCardNumberState: {
    first: string;
    second: string;
    third: string;
    fourth: string;
};
export type CardNumberStateKey = keyof CarNumberStateType;
declare function useCardNumber(): {
    cardNumber: {
        first: string;
        second: string;
        third: string;
        fourth: string;
    };
    errorState: {
        errorState: {
            first: boolean;
            second: boolean;
            third: boolean;
            fourth: boolean;
        };
        errorMessage: string;
    };
    handleCardNumberChange: (e: ChangeEvent<HTMLInputElement>, field: CardNumberStateKey) => void;
};
export default useCardNumber;

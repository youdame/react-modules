import { ChangeEvent } from 'react';
declare function useCvc(): {
    cvc: string;
    errorState: {
        errorState: boolean;
        errorMessage: string;
    };
    handleCvcChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export default useCvc;

import { ChangeEvent } from 'react';
export type ExpirationStateType = typeof initialExpirationState;
declare const initialExpirationState: {
    year: string;
    month: string;
};
export type ExpirationStateKey = keyof ExpirationStateType;
declare function useExpiration(): {
    expiration: {
        year: string;
        month: string;
    };
    errorState: {
        errorState: {
            year: boolean;
            month: boolean;
        };
        errorMessage: string;
    };
    handleExpirationChange: (e: ChangeEvent<HTMLInputElement>, field: ExpirationStateKey) => void;
};
export default useExpiration;

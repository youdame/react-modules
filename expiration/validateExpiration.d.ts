import { ExpirationStateType } from './useExpiration';
declare const validateExpiration: (expiration: ExpirationStateType) => {
    errorState: {
        year: boolean;
        month: boolean;
    };
    errorMessage: string;
};
export default validateExpiration;

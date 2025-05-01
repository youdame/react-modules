import { ChangeEvent } from 'react';
declare function usePassword(): {
    password: string;
    errorState: {
        errorState: boolean;
        errorMessage: string;
    };
    handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export default usePassword;

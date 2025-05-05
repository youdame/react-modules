import { initialExpirationState } from '../constants/expiration';

export type ExpirationStateType = typeof initialExpirationState;
export type ExpirationStateKey = keyof ExpirationStateType;

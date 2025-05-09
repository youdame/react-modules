import { initialCardNumberState } from '../constants/cardNumber';

export type CardNumberStateType = typeof initialCardNumberState;

export type CardNumberStateKey = keyof CardNumberStateType;

import { initialCardNumberState } from '../constants/cardNumber';

export type CarNumberStateType = typeof initialCardNumberState;

export type CardNumberStateKey = keyof CarNumberStateType;

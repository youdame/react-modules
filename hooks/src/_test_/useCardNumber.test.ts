import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../lib/cardNumber/useCardNumber';
import { TEST_CARD_NUMBERS } from '../_fixture_/cardNumber.fixture';

describe('useCardNumber 성공 케이스', () => {
  it('모든 입력값이 유효할 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange(TEST_CARD_NUMBERS.valid, 'first');
      result.current.handleCardNumberChange(TEST_CARD_NUMBERS.valid, 'second');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange(TEST_CARD_NUMBERS.valid, 'first');
    });

    expect(result.current.cardNumber.first).toBe(TEST_CARD_NUMBERS.valid);
  });
});

describe('useCardNumber 실패 케이스', () => {
  it('숫자가 아닌 문자가 포함되면 형식 오류 메시지를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange(TEST_CARD_NUMBERS.invalid.nonNumeric, 'first');
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  it('입력값이 4자리보다 짧으면 길이 오류 메시지를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange(TEST_CARD_NUMBERS.invalid.tooShort, 'first');
    });

    expect(result.current.errorState.errorMessage).toBe('4자리 숫자를 입력하세요.');
  });

  it('입력값이 4자리보다 길면 길이 오류 메시지를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange(TEST_CARD_NUMBERS.invalid.tooLong, 'first');
    });

    expect(result.current.errorState.errorMessage).toBe('4자리 숫자를 입력하세요.');
  });
});

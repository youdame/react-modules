import { renderHook, act } from '@testing-library/react';
import useCvc from '../lib/cvc/useCvc';
import { TEST_CVC } from '../_fixture_/cvc.fixture';

describe('useCvc 성공 케이스', () => {
  it('입력값이 없을 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => useCvc());

    act(() => {
      result.current.handleCvcChange(TEST_CVC.empty);
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 유효할 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => useCvc());

    act(() => {
      result.current.handleCvcChange(TEST_CVC.valid);
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCvc());

    act(() => {
      result.current.handleCvcChange('11');
    });

    expect(result.current.cvc).toBe('11');
  });
});

describe('useCvc 실패 케이스', () => {
  it('숫자가 아닌 문자를 입력하면 "숫자만 입력하세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => useCvc());

    act(() => {
      result.current.handleCvcChange(TEST_CVC.invalid.nonNumeric);
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  it('3자리 숫자가 아니면 "3자리 숫자를 입력하세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => useCvc());

    act(() => {
      result.current.handleCvcChange(TEST_CVC.invalid.tooLong);
    });

    act(() => {
      result.current.handleCvcChange(TEST_CVC.invalid.tooShort);
    });

    expect(result.current.errorState.errorMessage).toBe('3자리 숫자를 입력하세요.');
  });
});

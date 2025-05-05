import { renderHook, act } from '@testing-library/react';
import usePassword from '../lib/password/usePassword';
import { TEST_PASSWORD } from '../_fixture_/password.fixture';

describe('usePassword 성공 케이스', () => {
  it('입력값이 없을 경우 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(TEST_PASSWORD.empty);
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('유효한 입력일 경우 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(TEST_PASSWORD.valid);
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 상태에 정확히 반영되어야 한다.', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(TEST_PASSWORD.valid);
    });

    expect(result.current.password).toBe(TEST_PASSWORD.valid);
  });
});

describe('usePassword 실패 케이스', () => {
  it('숫자가 아닌 문자 입력 시 "숫자만 입력하세요." 에러 반환', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(TEST_PASSWORD.invalid.nonNumeric);
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  it('입력값이 너무 짧으면 "2자리 숫자를 입력하세요." 에러 반환', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(TEST_PASSWORD.invalid.tooShort);
    });

    expect(result.current.errorState.errorMessage).toBe('2자리 숫자를 입력하세요.');
  });

  it('입력값이 너무 길어도 "2자리 숫자를 입력하세요." 에러 반환', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(TEST_PASSWORD.invalid.tooLong);
    });

    expect(result.current.errorState.errorMessage).toBe('2자리 숫자를 입력하세요.');
  });
});

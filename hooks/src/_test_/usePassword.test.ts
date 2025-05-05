import { renderHook, act } from '@testing-library/react';
import usePassword from '../lib/password/usePassword';

describe('usePassword 성공 케이스', () => {
  it('모든 입력값이 없을 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange('');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('모든 입력값이 유효할 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange('11');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange('11');
    });

    expect(result.current.password).toBe('11');
  });
});

describe('usePassword 실패 케이스', () => {
  it('숫자가 아닌 문자를 입력하면 "숫자만 입력하세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange('11d');
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  it('3자리 숫자가 아니면 "3자리 숫자를 입력하세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange('12');
      result.current.handlePasswordChange('3');
    });

    expect(result.current.errorState.errorMessage).toBe('2자리 숫자를 입력하세요.');
  });
});

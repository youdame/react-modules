import { renderHook, act } from '@testing-library/react';
import useExpiration from '../lib/expiration/useExpiration';
import { TEST_EXPIRATION } from '../_fixture_/expiration.fixture';

const setupHook = () => {
  const hook = renderHook(() => useExpiration());
  return hook.result;
};

describe('useExpiration 성공 케이스', () => {
  it('모든 입력값이 없을 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const result = setupHook();

    act(() => {
      result.current.handleExpirationChange(TEST_EXPIRATION.empty.month, 'month');
      result.current.handleExpirationChange(TEST_EXPIRATION.empty.year, 'year');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('모든 입력값이 유효할 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const result = setupHook();

    act(() => {
      result.current.handleExpirationChange(TEST_EXPIRATION.valid.month, 'month');
      result.current.handleExpirationChange(TEST_EXPIRATION.valid.year, 'year');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const result = setupHook();

    act(() => {
      result.current.handleExpirationChange(TEST_EXPIRATION.valid.month, 'month');
      result.current.handleExpirationChange(TEST_EXPIRATION.valid.year, 'year');
    });

    expect(result.current.expiration.month).toBe(TEST_EXPIRATION.valid.month);
    expect(result.current.expiration.year).toBe(TEST_EXPIRATION.valid.year);
  });
});

describe('useExpiration 실패 케이스', () => {
  it('숫자가 아닌 문자를 입력하면 "숫자만 입력하세요." 에러가 반환된다', () => {
    const result = setupHook();

    act(() => {
      result.current.handleExpirationChange(TEST_EXPIRATION.invalid.nonNumeric, 'month');
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  it('월 또는 연도가 2자리가 아니면 "2자리 숫자를 입력하세요." 에러가 반환된다', () => {
    const result = setupHook();

    act(() => {
      result.current.handleExpirationChange(TEST_EXPIRATION.invalid.length, 'month');
    });

    expect(result.current.errorState.errorMessage).toBe('2자리 숫자를 입력하세요.');
  });

  it('유효하지 않은 연도를 입력하면 "유효한 연도를 입력하세요." 에러가 반환된다', () => {
    const result = setupHook();

    act(() => {
      result.current.handleExpirationChange(TEST_EXPIRATION.invalid.year, 'year');
    });

    expect(result.current.errorState.errorMessage).toBe('유효한 연도를 입력하세요.');
  });

  it('현재보다 이전 날짜면 "지나지 않은 날짜를 입력해주세요." 에러가 반환된다', () => {
    const result = setupHook();

    act(() => {
      result.current.handleExpirationChange(TEST_EXPIRATION.invalid.past.month, 'month');
      result.current.handleExpirationChange(TEST_EXPIRATION.invalid.past.year, 'year');
    });

    expect(result.current.errorState.errorMessage).toBe('지나지 않은 날짜를 입력해주세요.');
  });
});

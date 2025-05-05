function useValidation<T>(
  value: T,
  validatorFn: (v: T) => { errorState: boolean; errorMessage: string },
  validateOnEmpty = false
) {
  const shouldValidate = validateOnEmpty || (typeof value === 'string' ? value !== '' : true);
  return shouldValidate ? validatorFn(value) : { errorState: false, errorMessage: '' };
}

export default useValidation;

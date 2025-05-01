import validation from '../validation';

const validateCvc = (expiration: string) => {
  const errorObject = {
    errorState: false,
    errorMessage: ''
  };

  if (!validation.isNumber(expiration) && expiration !== '') {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  if (!validation.isValidLength(expiration, 3) && expiration !== '') {
    return { errorState: true, errorMessage: '3자리 숫자를 입력하세요.' };
  }

  return errorObject;
};

export default validateCvc;

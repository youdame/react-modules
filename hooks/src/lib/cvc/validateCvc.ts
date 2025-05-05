import validation from '../validation';

const validateCvc = (cvc: string) => {
  const errorObject = {
    errorState: false,
    errorMessage: ''
  };

  if (cvc === '') return errorObject;

  if (!validation.isNumber(cvc)) {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  if (!validation.isValidLength(cvc, 3)) {
    return { errorState: true, errorMessage: '3자리 숫자를 입력하세요.' };
  }

  return errorObject;
};

export default validateCvc;

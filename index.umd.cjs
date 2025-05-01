(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react")) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.index = {}, global.React));
})(this, function(exports2, react) {
  "use strict";
  const validation = {
    isNumber: (value) => {
      const regex = /^[0-9]+$/;
      return regex.test(value);
    },
    isValidLength: (value, length) => {
      return value.length === length;
    },
    isValidMonth: (value) => {
      const numericMonth = Number(value);
      if (numericMonth < 1 || numericMonth > 12) {
        return false;
      }
      return true;
    },
    isValidYear: (value) => {
      const numericYear = Number(value);
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      if (currentYear > numericYear) {
        return false;
      }
      return true;
    },
    isValidateDate: (month, year) => {
      const numericMonth = Number(month);
      const numericYear = Number(year);
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      if (currentYear === numericYear) {
        const currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
        if (currentMonth > numericMonth) {
          return false;
        }
      }
      return true;
    }
  };
  const validateCardNumber = (cardNumber) => {
    const errorState = {
      first: false,
      second: false,
      third: false,
      fourth: false
    };
    let errorMessage = "";
    for (const [k, value] of Object.entries(cardNumber)) {
      const key = k;
      if (!validation.isNumber(value) && value !== "") {
        errorState[key] = true;
        errorMessage = "숫자만 입력하세요.";
        break;
      }
      if (!validation.isValidLength(value, 4) && value !== "") {
        errorState[key] = true;
        errorMessage = "4자리 숫자를 입력하세요.";
        break;
      }
    }
    return { errorState, errorMessage };
  };
  const initialCardNumberState = {
    first: "",
    second: "",
    third: "",
    fourth: ""
  };
  function useCardNumber() {
    const [cardNumber, setCardNumber] = react.useState(initialCardNumberState);
    const handleCardNumberChange = (e, field) => {
      const value = e.target.value;
      setCardNumber((prev) => ({ ...prev, [field]: value }));
    };
    return {
      cardNumber,
      errorState: validateCardNumber(cardNumber),
      handleCardNumberChange
    };
  }
  const validateCvc = (cvc) => {
    const errorObject = {
      errorState: false,
      errorMessage: ""
    };
    if (!validation.isNumber(cvc) && cvc !== "") {
      return { errorState: true, errorMessage: "숫자만 입력하세요." };
    }
    if (!validation.isValidLength(cvc, 3) && cvc !== "") {
      return { errorState: true, errorMessage: "3자리 숫자를 입력하세요." };
    }
    return errorObject;
  };
  function useCvc() {
    const [cvc, setCvc] = react.useState("");
    const handleCvcChange = (e) => {
      const value = e.target.value;
      setCvc(value);
    };
    return {
      cvc,
      errorState: validateCvc(cvc),
      handleCvcChange
    };
  }
  const validateExpiration = (expiration) => {
    const errorState = {
      year: false,
      month: false
    };
    let errorMessage = "";
    for (const [k, value] of Object.entries(expiration)) {
      const key = k;
      if (!validation.isNumber(value) && value !== "") {
        errorState[key] = true;
        errorMessage = "숫자만 입력하세요.";
        break;
      }
      if (!validation.isValidLength(value, 2) && value !== "") {
        errorState[key] = true;
        errorMessage = "2자리 숫자를 입력하세요.";
        break;
      }
      if (!validation.isValidMonth(value) && key === "month" && value !== "") {
        errorState[key] = true;
        errorMessage = "유효한 월을 입력하세요.";
        break;
      }
      if (!validation.isValidYear(value) && key === "year" && value !== "") {
        errorState[key] = true;
        errorMessage = "유효한 연도를 입력하세요.";
        break;
      }
      if (!validation.isValidateDate(expiration.month, expiration.year) && expiration.month !== "" && expiration.year !== "") {
        errorState[key] = true;
        errorMessage = "지나지 않은 날짜를 입력해주세요.";
        break;
      }
    }
    return { errorState, errorMessage };
  };
  const initialExpirationState = {
    year: "",
    month: ""
  };
  function useExpiration() {
    const [expiration, setExpiration] = react.useState(initialExpirationState);
    const handleExpirationChange = (e, field) => {
      const value = e.target.value;
      setExpiration((prev) => ({ ...prev, [field]: value }));
    };
    return {
      expiration,
      errorState: validateExpiration(expiration),
      handleExpirationChange
    };
  }
  const validatePassword = (password) => {
    const errorObject = {
      errorState: false,
      errorMessage: ""
    };
    if (!validation.isNumber(password) && password !== "") {
      return { errorState: true, errorMessage: "숫자만 입력하세요." };
    }
    if (!validation.isValidLength(password, 2) && password !== "") {
      return { errorState: true, errorMessage: "2자리 숫자를 입력하세요." };
    }
    return errorObject;
  };
  function usePassword() {
    const [password, setPassword] = react.useState("");
    const handlePasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);
    };
    return {
      password,
      errorState: validatePassword(password),
      handlePasswordChange
    };
  }
  exports2.useCardNumber = useCardNumber;
  exports2.useCvc = useCvc;
  exports2.useExpiration = useExpiration;
  exports2.usePassword = usePassword;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});

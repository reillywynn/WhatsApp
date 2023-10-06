import {
  validateString,
  validateEmail,
  validatePassword,
} from "../validationConstraints";

export const validateInput = (inputId, inputValue) => {
  if (inputId === "firstName" || inputId === "lastName") {
    return validateString(inputId, inputValue);
  }
  if (inputId === "email") {
    return validateEmail(inputId, inputValue);
  }
  if (inputId === "password" || inputId === "lastName") {
    return validatePassword(inputId, inputValue);
  }
};

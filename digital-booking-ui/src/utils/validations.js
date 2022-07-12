const regexEmail = new RegExp(
  /^(([^<>?()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
);
export const isValidEmail = (email) => regexEmail.test(email);

export const isEmptyObject = (obj) => !Object.values(obj).length > 0;

export const isEmptyArray = (arr) => !arr.length > 0;

export const isNullishArray = (arr) => arr.every((value) => value === null);

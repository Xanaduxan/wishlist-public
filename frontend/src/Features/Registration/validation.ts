 export const nickNameValidation = {
  required: 'Нужно заполнить',
  validate: (value:string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Нельзя использовать русские буквы';
    }
    if (value.length < 3 || value.length > 16) {
      return 'логин должен быть от 3 до 16 символов';
    }
    return true;
  }
 };

 export const passwordValidation = {
  required: 'Нужно заполнить',
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль должен быть больше 6-ти символов';
    }
    return true;
  }
 };

 export const repeatPasswordValidation = {
  required: 'Нужно заполнить',
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль должен быть больше 6-ти символов';
    }
    return true;
  }
 };

 export const emailValidation = {
  required: 'Нужно заполнить',
  validate: (value:string) => {
    if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
      return 'Неправильный формат email';
    }
    return true;
  }
 };

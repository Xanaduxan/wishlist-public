export const NameValidation = {
  required: 'Нужно заполнить',
  validate: (value: string) => {
    if (value.length < 3 || value.length > 16) {
      return 'Name должен быть от 3 до 16 символов';
    }
    return true;
  }
};

export const simpleValidations = {
  required: 'Нужно заполнить'
};

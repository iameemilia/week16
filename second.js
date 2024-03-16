function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const age = document.getElementById('age');
  const profession = document.getElementById('profession');
  const password = document.getElementById('password');
  const agreement = document.getElementById('agreement');
  const submitButton = document.getElementById('submitButton');

  if (name.validity.valid && email.validity.valid && age.validity.valid && profession.validity.valid && password.validity.valid && agreement.checked) {
    console.log('Имя:', name.value);
    console.log('Email:', email.value);
    console.log('Возраст:', age.value);
    console.log('Пол:', document.querySelector('input[name="gender"]:checked').value);
    console.log('Профессия:', profession.value);
    console.log('Пароль:', password.value);
    document.getElementById('registrationForm').reset();
    submitButton.disabled = true;
  } else {
    if (!name.validity.valid) {
      name.setCustomValidity("Имя должно содержать только буквы и пробелы и быть от 2 до 20 символов");
    }

    if (!email.validity.valid) {
      email.setCustomValidity("Введите корректный email");
    }

    if (!age.validity.valid) {
      age.setCustomValidity("Введите возраст");
    }

    if (!profession.validity.valid) {
      profession.setCustomValidity("Выберите профессию");
    }

    if (!password.validity.valid) {
      password.setCustomValidity("Пароль должен содержать минимум 8 символов, 1 заглавную букву, 1 строчную букву и 1 цифру");
    }

    if (!agreement.checked) {
      agreement.setCustomValidity("Необходимо дать согласие на обработку данных");
    }

    name.reportValidity();
    email.reportValidity();
    age.reportValidity();
    profession.reportValidity();
    password.reportValidity();
    agreement.reportValidity();
    submitButton.disabled = true;
  }
}

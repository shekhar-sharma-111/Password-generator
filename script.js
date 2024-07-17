document.addEventListener('DOMContentLoaded', () => {
  const lowercaseCheckbox = document.getElementById('lowercase');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const numbersCheckbox = document.getElementById('numbers');
  const specialCheckbox = document.getElementById('special');
  const lengthInput = document.getElementById('length');
  const passwordOutput = document.getElementById('password');
  const generateButton = document.getElementById('generate');
  const copyButton = document.getElementById('copy');
  const resetButton = document.getElementById('reset');

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

  function generatePassword() {
    let allChars = '';
    let password = '';
    if (lowercaseCheckbox.checked) allChars += lowercaseChars;
    if (uppercaseCheckbox.checked) allChars += uppercaseChars;
    if (numbersCheckbox.checked) allChars += numberChars;
    if (specialCheckbox.checked) allChars += specialChars;

    const length = parseInt(lengthInput.value, 10);

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    passwordOutput.value = password;
  }

  function copyToClipboard() {
    if (passwordOutput.value) {
      passwordOutput.select();
      document.execCommand('copy');
      alert('Password copied to clipboard');
    } else {
      alert('Please generate a password first');
    }
  }

  function resetForm() {
    lowercaseCheckbox.checked = true;
    uppercaseCheckbox.checked = true;
    numbersCheckbox.checked = true;
    specialCheckbox.checked = true;
    lengthInput.value = 12;
    passwordOutput.value = '';
  }

  generateButton.addEventListener('click', generatePassword);
  copyButton.addEventListener('click', copyToClipboard);
  resetButton.addEventListener('click', resetForm);
});

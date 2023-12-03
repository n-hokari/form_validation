function checkEmail() {
  const form = document.getElementById('form');
  const email = document.getElementById('email');
  const email_confirm = document.getElementById('email_confirm');
  const errorMessageElement = document.getElementById('error_message');

  if (form.email.value !== form.email_confirm.value) {
    // エラーメッセージを表示
    if (!errorMessageElement) {
      const element = document.createElement('p');
      element.id = 'error_message';
      const message = document.createTextNode("Eメールが一致しません");
      element.appendChild(message);
      email_confirm.parentNode.insertBefore(element, email_confirm.nextSibling);

      email_confirm.style.backgroundColor = 'rgba(230,169,171,.5)';
      email_confirm.style.color = '#d14539';
    }
  } else {
    // エラーメッセージを削除
    if (errorMessageElement) {
      errorMessageElement.parentNode.removeChild(errorMessageElement);
      email_confirm.style.backgroundColor = '';
      email_confirm.style.color = '';
    }
  }
}

window.onload = function () {
  const form = document.getElementById('form');
  form.addEventListener("keyup", checkEmail);
};

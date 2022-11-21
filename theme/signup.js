let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");

btnSignup.addEventListener('click', (event) => {
  event.preventDefault();
  let user = {
    email: email.value,
    password: password.value,
    // passwordenter: pw-re-enter.value,
  };
  let json = JSON.stringify(user);
  if (!email.value || !password.value) {
    alert("Vui lòng điền đầy đủ thông tin");
  }
  else {
    localStorage.setItem(email.value, json);
    alert("Đăng kí thành công");
    window.location.href = "login.html";
  }
});
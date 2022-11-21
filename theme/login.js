let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  let user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!email.value || !password.value) {
    alert("Vui lòng điền đầy đủ thông tin!!!");
  }
  if (localStorage.getItem(email.value) == json) {
    alert("Đăng nhập thành công");
    window.location.href = "index-login.html";
  } else {
    alert("Đăng nhập thất bại!!!");
  }
});
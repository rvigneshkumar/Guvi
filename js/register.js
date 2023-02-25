function registerUser() {
  const username = document.querySelector("#register-username");
  const age = document.querySelector("#register-age");
  const password = document.querySelector("#register-password");
  const email = document.querySelector("#register-email");
  const confirmPassword = document.querySelector("#register-password-repeat");

  if (username.value === "") {
    alert("please enter your username");
  } else if (email.value === "") {
    alert("please enter your email");
  } else if (age.value === "") {
    alert("please enter your age");
  } else if (password.value === "") {
    alert("please enter your password");
  } else if (confirmPassword.value === "") {
    alert("please re-enter your password");
  } else if (password.value != confirmPassword.value) {
    alert("password doesn't match");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem(
      "password",
      "fhgfdkhj44t9fdsljerljs" + password.value + "gshiuyr87wtyfdskhsk"
    );
    localStorage.setItem("age", age.value);
    localStorage.setItem("email", email.value);
    alert("Registered successfully. Please press Ok to Login");
    window.location.href = "login.html";
  }
}

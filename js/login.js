function login() {
  const username = document.querySelector("#login-username").value;
  const password = document.querySelector("#login-password").value;
  if (username == "") {
    alert("No username entered");
  } else if (password == "") {
    alert("No password entered");
  } else {
    if (
      localStorage.getItem("username") === username &&
      localStorage.getItem("password") ===
        "fhgfdkhj44t9fdsljerljs" + password + "gshiuyr87wtyfdskhsk"
    ) {
      alert("Login Successfull!");
      window.location.href = "profile.html";
    } else {
      alert("Username or Password is invalid");
    }
  }
}

if (localStorage.getItem("username")) {
  document.querySelector("#profile-username").innerHTML +=
    localStorage.getItem("username");
  document.querySelector("#profile-age").innerHTML +=
    localStorage.getItem("age");
  document.querySelector("#profile-email").innerHTML +=
    localStorage.getItem("email");
} else {
  alert("Please login");
  window.location.href = "login.html";
}

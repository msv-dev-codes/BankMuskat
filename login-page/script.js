// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const username = document.getElementById("textusername").value.trim();
//     const password = document.getElementById("textpassword").value.trim();

    // if (username === "TestUser" && password === "Test@123") {
    //   alert("Logged in");
    // } else {
    //   alert("please enter valid credentials");
    // }
//   });

function login(){
  const username = document.getElementById("textusername").value.trim();
  const password = document.getElementById("textpassword").value.trim();
  if (username === "TestUser" && password === "Test@123") {
    sessionStorage.setItem("isLoggedIn", true);
      window.location.href = "../home-dashboard/index.html"
    } else if(username !== "TestUser"){
      alert("Please enter valid Username");
    } else if(password !== "Test@123"){
      alert("Please enter valid Password");
    } else {
      alert("Please enter valid Credential");
    }
}
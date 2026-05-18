document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("textusername").value.trim();
    const password = document.getElementById("textpassword").value.trim();

    if (username === "TestUser" && password === "Test@123") {
      alert("Logged in");
    } else {
      alert("please enter valid credentials");
    }
  });


function logOut(){
    sessionStorage.removeItem("isLoggedIn");
    window.location.replace("../login-page/index.html")
}
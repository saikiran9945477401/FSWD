function form(){
    let email = document.getElementById("email").value;

let password = document.getElementById("password").value;
let mobilenumber = document.getElementById("mobilenumber").value;
let repassword = document.getElementById("repassword").value;


if (email  == "") {
document.getElementById("sai1").innerHTML = "*Please Enter email address";
return false;
}
if (password == "" || password.length < 5) {
document.getElementById("sai2").innerHTML =
  "*Password min 5 Characters";
return false;
}
if (mobilenumber == "" || mobilenumber.length < 10) {
document.getElementById("sai4").innerHTML =
  "*number min 10 Characters";
return false;
}
if (repassword!=password) {
document.getElementById("sai3").innerHTML =
  "*please check ur password";
return false;
}

}
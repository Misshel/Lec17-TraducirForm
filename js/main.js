function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password= document.getElementById("inputPassword");

  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar Datos";
  button.innerHTML = "Iniciar Sesión";
}

var mostrar = document.getElementById("Data");
var buttonMos = document.getElementsByClassName("btn")[0];
buttonMos.onclick = function(){

  var newEmail = document.getElementById("inputEmail").value;
  var newPassword= document.getElementById("inputPassword").value;

  mostrar.innerHTML = "El correo electrónico ingresado es: " + "<br>" + newEmail + "<p>" + "La clave ingresada es: " + "<br>" + newPassword;
}


translate();

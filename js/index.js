
function mostraMoodal() {
  document.querySelector('.modalLogin').style.opacity = 0;
  document.querySelector(`.modalLogin`).style.display = "flex";
  setTimeout(() => {
    document.querySelector('.modalLogin').style.opacity = 1;
  }, 200);
};

function Cancel() {
  document.querySelector('.modalLogin').style.opacity = 1;
  setTimeout(() => {
    document.querySelector(`.modalLogin`).style.display = "none";
    document.querySelector('.modalLogin').style.opacity = 0;
  }, 200);
  document.querySelector(`#inputEmail`).value = "";
  document.querySelector(`#inputPassword`).value = "";
};

document.querySelector(`.login`).addEventListener(`click`, () => {

  let passWord = document.querySelector("#inputPassword").value;
  let email = document.querySelector("#inputEmail").value;

  if (passWord == 12345 && email == "cesar@gmail.com") {
    window.location.replace("user-logado/user.html");
  }

  if (passWord == 12345 && email == "admin@gmail.com") {
    window.location.replace("admin/admin.html");
  }
});


document.querySelector(`.btn-logar`).onclick = mostraMoodal;
document.querySelector(`.btn-logar-1`).onclick = mostraMoodal;
document.querySelector(`.btCancelar`).onclick = Cancel;
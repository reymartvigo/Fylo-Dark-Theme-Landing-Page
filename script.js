let form = document.getElementById("form");
let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var emailVal = email.value.trim();
  var emailPattern =
    /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;
  if (emailVal === "") {
    errorFunc(email, "Please enter a valid email address");
  } else if (!emailVal.match(emailPattern)) {
    errorFunc(email, "Please enter a valid email address");
  } else {
    successFunc(email, "");
  }
});

function errorFunc(req, msg) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = msg;
  req.className = "error";
  span.className = "error-text";
  if (req !== email) {
    req.value = "";
  } else {
    req.value = "example@fylo.com";
  }
}

function successFunc(req, msg) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = msg;
  req.className = "success";
  span.className = "success-text";
}

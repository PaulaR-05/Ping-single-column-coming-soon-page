const emailInput = document.querySelector("#email");
const btnS = document.querySelector("#btn-submit");
const errorMessage = document.querySelector("#res");
const checkEmailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeOut = setInterval(() => {
  errorMessage.style.display = "none";
}, 4000);

btnS.addEventListener("click", function () {
  if (emailInput.value.length === 0) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "#ff5263";
    errorMessage.innerHTML =
      "Whoops!🙁 It looks like you forgot to add your email";
    timeOut;
  } else if (
    !emailInput.value.match(checkEmailform) &&
    emailInput.value.length !== 0
  ) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "#ff5263";
    errorMessage.innerHTML = "Please provide a valid email address 🚩";
    timeOut;
  } else {
    errorMessage.style.display = "block";
    errorMessage.style.color = "green";
    errorMessage.innerHTML = "We sent you a gift, check it out! 🎁";
    timeOut;
  }
});

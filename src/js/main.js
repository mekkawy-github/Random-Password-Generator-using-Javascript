const passwordGenerated = document.querySelector("#show");
const slider = document.querySelector("#slider");
slider.addEventListener("input", () => {
  passwordGenerated.value = generatePassword();
});

function generatePassword() {
  const charcters =
    "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()";
  let password = "";
  randomNumber = Math.round(Math.random() * charcters.length);
  password += charcters.substring(randomNumber);
  if (password.length >= slider.min && password.length <= slider.max) {
    return password;
  } else {
    passwordGenerated.value = "Not Allow";
  }
}

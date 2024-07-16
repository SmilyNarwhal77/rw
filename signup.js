function submit() {
  let username = document.querySelector("#username");
  const usernameVal = username.value;
  if (usernameVal.length < 5 || usernameVal.length > 30) {
    username.classList.remove("valid");
    username.classList.add("invalid");
  } else {
    username.classList.remove("invalid");
    username.classList.add("valid");  
    console.log("Username SUCCESS value:", usernameVal);
  }
  
  let password = document.querySelector("#password");
  const passwordVal = password.value;
  if (passwordVal.length < 5 || passwordVal.length > 30) {
    password.classList.remove("valid");
    password.classList.add("invalid");
  } else {
    password.classList.remove("invalid");  
    password.classList.add("valid");
    console.log("Password SUCCESS value:", passwordVal);
  }
  
  let email = document.querySelector("#email");
  const emailVal = email.value;
  if (emailVal.length < 5 || emailVal.length > 30) {
    email.classList.remove("valid");
    email.classList.add("invalid");
  } else {
    email.classList.remove("invalid");  
    email.classList.add("valid");
    console.log("email SUCCESS value:", emailVal);
  }

  alert("Test Only!");
};

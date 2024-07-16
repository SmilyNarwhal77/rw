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
  console.log(email.value);

  alert("Function not available");
};

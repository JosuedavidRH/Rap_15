 function submitForm(event) {
  event.preventDefault(); 

  let emailInput = document.getElementById("email");
  let email = emailInput.value;

  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    alert("Your account details are successfully submitted.");
    
  } else {
    alert("Invalid email. Please enter a valid email address.");
  }
}
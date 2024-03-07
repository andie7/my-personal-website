function handleSubmission(event) {
  event.preventDefault();

  form.submit();
  alert("Thank you for your message");
}

let button = document.getElementById("submit-button");
let form = document.getElementById("formElement");
button.addEventListener("click", handleSubmission);

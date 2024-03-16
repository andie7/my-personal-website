function handleSubmission(event) {
  event.preventDefault();

  form.submit();
  alert("Thank you for your message");
}

let button = document.getElementById("submit-button");
let form = document.getElementById("formElement");
button.addEventListener("click", handleSubmission);

// button

function goRight() {
  scrollContainer.scrollLeft += 900;
}

function goLeft() {
  scrollContainer.scrollLeft -= 900;
}

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

backBtn.addEventListener("click", goLeft.bind(scrollContainer));

nextBtn.addEventListener("click", goRight.bind(scrollContainer));

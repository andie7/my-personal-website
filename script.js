function handleSubmission(event) {
  event.preventDefault();

  form.submit();
  alert(
    "Thank you for your message. The goal here was to use Java Script to alert you this message when the button is clicked. In case you want to contact me, please do it via  phone, email or Linkedin"
  );
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

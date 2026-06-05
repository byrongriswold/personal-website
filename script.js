const contactForm = document.querySelector("form");

function createErrorMessages() {
  const errorMessages = [
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
  ];

  errorMessages.forEach((errorMessage) => {
    errorMessage.classList.add("error-message");
  });

  errorMessages[0].textContent = "Please enter your name.";
  errorMessages[1].textContent = "Please enter a valid email address.";
  errorMessages[2].textContent = "Please enter a non-empty message.";

  const nameGroup = document.querySelector(".name-group");
  const emailGroup = document.querySelector(".email-group");
  const messageGroup = document.querySelector(".message-group");

  nameGroup.append(errorMessages[0]);
  emailGroup.append(errorMessages[1]);
  messageGroup.append(errorMessages[2]);
}

createErrorMessages();

function clearErrorMessages() {
  const errorMessages = document.querySelectorAll(".error-message");

  errorMessages.forEach((errorMessage) => {
    errorMessage.classList.remove("visible");
  });
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrorMessages();

  if (validateName()) {
    if (validateEmail()) {
      if (validateMessage()) {
        const contactSection = document.querySelector(".contact-section");
        const successMessage = document.querySelector(".submit-success");

        contactSection.classList.add("hidden");
        successMessage.classList.add("visible");
      }
    }
  }
});

function validateName() {
  const nameInput = document.getElementById("name");
  if (!nameInput.value.trim()) {
    const errorMessage = document.querySelector(".name-group .error-message");
    errorMessage.classList.add("visible");

    return false;
  }
  return true;
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailInput.value.match(emailPattern)) {
    const errorMessage = document.querySelector(".email-group .error-message");
    errorMessage.classList.add("visible");

    return false;
  }
  return true;
}

function validateMessage() {
  const messageInput = document.getElementById("message");

  if (!messageInput.value.trim()) {
    const errorMessage = document.querySelector(
      ".message-group .error-message",
    );
    errorMessage.classList.add("visible");

    return false;
  }
  return true;
}

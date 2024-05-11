const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

const formData = {
    email: "",
    message: ""
}

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem("inputData", JSON.stringify(formData));
}

populateText();

function populateText() {
    const data = JSON.parse(localStorage.getItem("inputData"));

    if (!data) {
        return;
    }

    const { email, message } = form.elements;
    email.value = data.email;
    message.value = data.message;
}


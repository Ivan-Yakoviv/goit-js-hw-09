const form = document.querySelector(".feedback-form");

form.label.textarea.setAttribute("placeholder", "Amazing nature");
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

const formData = {
    email: "",
    message: ""
}

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

populateText();

function populateText() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (!data) {
        return;
    }

    const { email, message } = form.elements;
    email.value = data.email;
    message.value = data.message;
}

function handleSubmit(event) {
    event.preventDefault();
    const { email, message } = form.elements;
       const emailValue = email.value;
    const messageValue = message.value;
    if (email.value === "" || message.value === "") {
       return alert("Please fill in all the fields!");
    }
    console.log({
        email: emailValue,
        message: messageValue
    });
    //   form.reset();
      event.target.reset();
    localStorage.removeItem("feedback-form-state");
}
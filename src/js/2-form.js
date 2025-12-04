console.log("   This is form page");

let formData = {
  email: "",
  message: "",
};

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email || "";
  form.message.value = formData.message || "";
}

form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted form data:", formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});
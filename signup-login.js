const log_in_btn = document.querySelector("#log-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const entry_forms_container = document.querySelector(".entry-forms-container");
const log_in_btn2 = document.querySelector("#log-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    entry_forms_container.classList.add("sign-up-mode");
});
log_in_btn.addEventListener("click", () => {
    entry_forms_container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    entry_forms_container.classList.add("sign-up-mode2");
});
log_in_btn2.addEventListener("click", () => {
    entry_forms_container.classList.remove("sign-up-mode2");
});
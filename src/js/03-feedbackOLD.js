import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

function saveToLocalStorage() {
    formData = Object.fromEntries(new FormData(formEl));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillFormFromLocalStorage() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            formData = JSON.parse(savedData);
            Object.entries(formData).forEach(([key, val]) => {
                if (formEl.elements[key]) {
                    formEl.elements[key].value = val;
                }
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}


function handleSubmit (e) {
    e.preventDefault();

    console.log(formData);
    formData = {};
    localStorage.removeItem(STORAGE_KEY);
    formEl.reset();
}

formEl.addEventListener('input', throttle(saveToLocalStorage, 500));
window.addEventListener('load', fillFormFromLocalStorage);
formEl.addEventListener('submit', handleSubmit);
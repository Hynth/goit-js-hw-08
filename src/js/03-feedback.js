import _ from 'lodash.throttle';


const LOCALSTORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const btn = form.querySelector("button");

if(localStorage.getItem(LOCALSTORAGE_KEY)){
    const savedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    form[0].value = (savedForm.email ? savedForm.email: "");
    form[1].value = (savedForm.message ? savedForm.message: "");
}


const handleForm = (event) => {
    const attr = event.target.name;
    let dataForm = {};

    if(localStorage.getItem(LOCALSTORAGE_KEY)){
        const savedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        savedForm[attr] = event.target.value;
        _(localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedForm)), 500);
    }
    else {
        dataForm[attr] = event.target.value;
        _(localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm)), 500);
    }
}

const handleButton = (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.clear();
    form.reset();
};


form.addEventListener("input", handleForm);
form.addEventListener("submit", handleButton);
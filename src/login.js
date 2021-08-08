const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const master = document.querySelector(".master");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function loginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    writeMaster(username)
}

function writeMaster(username){
    master.innerText = `${username}'s To do list`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    master.classList.remove(HIDDEN_CLASSNAME)
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",loginSubmit)
} else {
    writeMaster(savedUserName)
}
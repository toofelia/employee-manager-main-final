
const loginEmailWarning = document.querySelector(".warning-email");
const loginPasswordWarning = document.querySelector(".warning-password");


function  onLogin(e) {
    const email = e.currentTarget.email.value.trim();
    const password = e.currentTarget.password.value.trim();
    let ok = true;
    loginEmailWarning.textContent = "";
    loginPasswordWarning.textContent = "";

    if(!email) {
        ok = false;
        loginEmailWarning.textContent = "Please enter email";
    }
    if(!password) {
        ok = false;
        loginPasswordWarning.textContent = "Please enter password";
    }

    if(!ok) {
        e.preventDefault();
    }
} 

document.querySelector("#login").addEventListener('submit', onLogin);
 


const signupWarning = document.querySelector(".warning");
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function  onSignup(e) {
    const username = e.currentTarget.username.value.trim();
    const email = e.currentTarget.email.value.trim();
    const password = e.currentTarget.password.value.trim();
    let message = "";
    signupWarning.textContent = "";

    if(!username || username.length < 5) {
        message = "Please enter a user name at least 5 characters long";
    }
    if(!email || !email.match(mailformat)) {
        if(message) message += "; ";
        message += "Please enter a valid email";
    }
    if(!password || password.length < 6) {
        if(message) message += "; ";
        message += "Please enter a password at least 6 characters long";
    }

    if(message) {
        e.preventDefault();
        signupWarning.textContent = message;
    }
} 

document.querySelector("#register").addEventListener('submit', onSignup);
 

function onChange() {
    let passInput = document.getElementById("pass").value;
    let confPassInput = document.getElementById("cPass").value;
    let errorMessage = document.querySelector(".error");
    let submitButton = document.getElementById("mySubmit");

    if(passInput != confPassInput){
        errorMessage.textContent = "*Passwords don't match !";
        submitButton.disabled = true;
    } else {
        errorMessage.textContent = " ";
        submitButton.disabled = false;
    }
    
}

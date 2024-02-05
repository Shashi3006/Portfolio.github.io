let user = document.querySelector("#username");
let email = document.querySelector("#mailId");
let password = document.querySelector("#password");
let submitForm = document.querySelector("#submitBtn");

submitForm.addEventListener('click',SubmitDetails);

function SubmitDetails(){
    let user_name = user.value;
    let mailId = email.value;
    let passwrd = password.value;

    localStorage.setItem('userName', user_name)
    localStorage.setItem('email', mailId)
    
}
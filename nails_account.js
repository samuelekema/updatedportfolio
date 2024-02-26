function togglePassword(){
    const passwordInput = document.getElementsByClassName("passwordEl");
    const hide = document.querySelector(".hide");
    for(var i = 0; i<passwordInput.length; i++) {
        if(passwordInput[i].type == "password") {
            passwordInput[i].type = "text";
            hide.innerHTML = "Hide";
        } else {
            passwordInput[i].type = "password";
            hide.innerHTML = "Show";
        }
    }
}


const passwordEl = document.getElementById("password-input");
const verifypassword = document.getElementById("verify-password").value;
const submitBtn = document.getElementById("submit");


submitBtn.addEventListener("click", ()=>{
    console.log("passwordEl").value;
})


const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElem = document.getElementById("error")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let message = []
    if(email.value == ""){
        message.push("Whoops! It looks like you forgot to add your email")
    }else if (!checkEmail(email.value)){
        message.push("Please provide a valid email address")
    }else {
        message.push("")
    }
    
    errorElem.innerHTML = message.join(", ")

})









function checkEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

}
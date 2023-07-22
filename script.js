const submitBtn = document.querySelector(".sign-up__submit")
const inputEmail = document.querySelector(".input")
const inputEmailstyle = document.getElementById("email")
const inputvalue = inputEmail.value
const signUpForm = document.querySelector(".sign-up__form")
//valid alert
const newChild = document.createElement("p")
newChild.classList.add("valid")
newChild.textContent = "valid email request"
//valid alert

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const url = "thanks.html"

submitBtn.addEventListener ("click" , function(){
    
    if (!emailPattern.test(inputEmail.value)) {
        inputEmailstyle.style.backgroundColor = "#FFE8E6";
        inputEmailstyle.style.color = "#f12323";
        signUpForm.append(newChild)
        inputEmail.setAttribute("placeholder" , "ash#loremcompany.com")
    }  else { 
        window.open(url)
    }
    inputEmail.value = ""
})


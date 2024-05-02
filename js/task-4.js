const form = document.querySelector(".login-form");
form.addEventListener("submit", newUserInfo);


function newUserInfo (event) {
event.preventDefault();   // обнулення дефолтної повдінки(перезавантаження)
const elements = event.currentTarget.elements;     // винягування інформації з інпуту про емайл та пороль

if (elements.email.value === "" || elements.password.value === "") {
    alert `All form fields must be filled in`
     } else {
        const info = {
            email: elements.email.value.trim(),
            password: elements.password.value.trim(),
        }
        console.log(info)
        form.reset()  
}
 // очищення після висилання даних
}

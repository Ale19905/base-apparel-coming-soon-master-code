const InputNode = document.querySelector('#input')
const submitBtn = document.querySelector('#btn')
const alert = document.querySelector('#alert_email')
const error = document.querySelector('#error_icon')
var user;

function WriteEmail(e){
    user = e.target.value;
}

InputNode.addEventListener('change', WriteEmail)

var er = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


submitBtn.addEventListener('click', () => {
    
    if(er.test(user)){
        alert.style.color = '#008000';
        alert_email.innerHTML = 'Email Acepted'
        InputNode.removeEventListener
        error.style.display = 'none';
        InputNode.style.borderColor = '#FFFFFF'
    }else if(user === undefined || user === ' '){
        alert.style.color = '#FF5733'
        alert_email.innerHTML = 'Email field is empty';
        error.style.display = 'block';
        InputNode.style.borderColor  = '#FF5733'
    }else if(er.test(user) == false){
        alert.style.color = '#FF5733'
        alert_email.innerHTML = 'Please provide a valid email';
        error.style.display = 'block';
        InputNode.style.borderColor  = '#FF5733'
        
    }
})

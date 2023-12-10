let passwordInput = document.getElementById('password');
let eye = document.querySelector('.show-hide');
function showHide(){
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
        eye.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';

    }else{
        eye.innerHTML = '<i class="bi bi-eye-fill"></i>';
        passwordInput.type = 'password';
    }
}
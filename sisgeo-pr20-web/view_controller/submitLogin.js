LoginForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    var loginModel = new Login(
        null,
        LoginForm.email.value,
        LoginForm.password.value
    );
    loginModel.Login();
    
});
LoginForm.addEventListener('submit', (event) => {
    isGoogleLogged = false;
    
    event.preventDefault();
    var sigiInModel = new User(
        null,
        LoginForm.email.value,
        LoginForm.password.value
    );
    sigiInModel.Login();
});
LoginForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    var sigiInModel = new User(
        null,
        LoginForm.email.value,
        LoginForm.password.value
    );
    sigiInModel.Login();
});

const SignInWithGoogle = () => {
    var userModel = new User();
    userModel.SignInWithGoogle();
}
class Login {  
    constructor(id, email, password){
        this.id = id;
        this.email = email;
        this.password = password;
    };

    Login = () => {
        auth.signInWithEmailAndPassword(this.email, this.password).then((credential) => {
            alert('Logged');
            LoginForm.reset();
            $('#loginModal').modal('hide');
            // LoginForm.email.value ='';
            // LoginForm.password.value ='';
        }).catch((err) => {
            loginModel.querySelector('.error').innerHTML = err.code;
            // alert(err);
        });
    }

    Logout = () => {
        auth.signOut().then(() => {
            alert('Logged out')
        });
    };

};

// export default Registry;
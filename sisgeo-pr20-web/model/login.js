validateErrMsj = (code) => {
    switch (code) {
        case 'auth/wrong-password':
            return 'wrong password, try again';
        case 'auth/user-not-foun':
            return 'No user found';
        case 'auth/weak-password':
            return 'weak password';
        default:
            return 'ERROR';
    }
}

class Login {
    constructor(id, email, password) {
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
            LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
            alert(err);
        });
    }

    Logout = () => {
        auth.signOut().then(() => {
            alert('Logged out')
        });
    };

};

// export default Registry;
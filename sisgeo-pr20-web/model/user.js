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

class User {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    };

    Login = () => {
        auth.signInWithEmailAndPassword(this.email, this.password).then((_) => {
            alert('Logged');
        }).then(() => {
            LoginForm.reset();
            $('#loginModal').modal('hide');
        }).catch((err) => {
            LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
            alert(err);
        });
    }

    Logout = () => {
        auth.signOut().then(() => {
            alert('Logged out');
        });
    };

    SignUp = (object) => {
        auth.createUserWithEmailAndPassword(this.email, this.password).then((credentials) => {
            alert('Signed Up');
            return database.collection('users').doc(credentials.user.uid).set({
                user: object.name,
                name: object.phone,
                address: object.address
            })
        }).then(() => {
            SignUpForm.reset();
            $('#signupModal').modal('hide');
        }).catch((err) => {
            SignUpForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
            alert(err);
        });
    }

    // SignInWithGoogle = () => {
    //     var provider = new firebase.auth.GoogleAuthProvider();

    //     firebase.auth().signInWithPopup(provider).then((result) => {

    //         var token = result.credential.accessToken;
    //         console.log(token);

    //         var user = result.user;

    //         const html = `
    //             <p>Name: ${user.displayName}</p>
    //             <p>Email: ${user.email}</p>
    //             <img src="${user.photoURL}">
    //         `;
    //         FetchInfoDiv.innerHTML = html;
    //         LoginForm.reset();
    //         $('#loginModal').modal('hide');
    //     }
    //     ).catch(function (error) {
    //         LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
    //         console.log(error);
    //     });
    // }

};

// export default Registry;
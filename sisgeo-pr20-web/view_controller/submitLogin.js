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

const SignInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    isGoogleLogged = true;

    firebase.auth().signInWithPopup(provider).then((result) => {

        var token = result.credential.accessToken;
        console.log(token);

        var user = result.user;

        const html = `
                <p>Name: ${user.displayName}</p>
                <p>Email: ${user.email}</p>
                <img src="${user.photoURL}">
            `;
        FetchInfoDiv.innerHTML = html;
        LoginForm.reset();
        $('#loginModal').modal('hide');
    }
    ).catch(function (error) {
        LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
        console.log(error);
    });
}
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

        let html = `<p>Name: ${user.displayName}</p><p>Email: ${user.email}</p>`;
        
        AccountImgSrc.src = user.photoURL;
        
        LoginForm.reset();
        document.getElementById('main-div').classList.add('d-none');
        document.getElementById('logged-div').classList.remove('d-none');
        
        AccountInfoCard.innerHTML = html;
    }
    ).catch(function (error) {
        LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
        console.log(error);
    });
}
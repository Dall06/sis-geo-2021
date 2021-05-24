LoginForm.addEventListener('submit', (event) => {
    isGoogleLogged = false;
    
    event.preventDefault();
    var signInModel = new User(
        null,
        LoginForm.email.value,
        LoginForm.password.value
    );
    signInModel.Login();
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
        MainDiv.classList.add('d-none');
        LoggedDiv.classList.remove('d-none');
        loadSongsInfo();
        AccountInfoCard.innerHTML = html;
    }
    ).catch(function (error) {
        LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
        console.log(error);
    });
}
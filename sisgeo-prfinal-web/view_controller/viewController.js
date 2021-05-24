const onClickToSignUp = () => {
    loginTab.classList.add('d-none');
    signUpTab.classList.remove('d-none');
    loginA.classList.remove('active');
    signUpA.classList.add('active');
}

const onClickToLogIn = () => {
    loginTab.classList.remove('d-none');
    signUpTab.classList.add('d-none');
    loginA.classList.add('active');
    signUpA.classList.remove('active');
}
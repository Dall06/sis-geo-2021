const onClickToSignUp = () => {
    let loginTab = document.getElementById("login-tab");
    let loginA = document.getElementById("a-login");
    let signUpA = document.getElementById("a-signup");
    let signUpTab = document.getElementById("signup-tab");

    loginTab.classList.add('d-none');
    signUpTab.classList.remove('d-none');
    loginA.classList.remove('active');
    signUpA.classList.add('active');
}

const onClickToLogIn = () => {
    let loginTab = document.getElementById("login-tab");
    let loginA = document.getElementById("a-login");
    let signUpA = document.getElementById("a-signup");
    let signUpTab = document.getElementById("signup-tab");

    loginTab.classList.remove('d-none');
    signUpTab.classList.add('d-none');
    loginA.classList.add('active');
    signUpA.classList.remove('active');
}
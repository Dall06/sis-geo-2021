SignUpForm,addEventListener('submit', (event) => {
    event.preventDefault();

    var signUpModel = new User(
        null,
        SignUpForm.signup_email.value,
        SignUpForm.signup_password.value,
        0.0,
        0.0
    );
    
    signUpModel.SignUp({
        name: SignUpForm.signup_name.value,
        phone: SignUpForm.signup_phone.value,
        address: SignUpForm.signup_address.value,
        lat: 0.0,
        lng: 0.0
    });
});
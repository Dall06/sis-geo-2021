SignUpForm,addEventListener('submit', (event) => {
    event.preventDefault();

    var signUpModel = new User(
        null,
        SignUpForm.signup_email.value,
        SignUpForm.signup_password.value,
    );
    
    signUpModel.SignUp({
        name: SignUpForm.signup_name.value,
        phone: SignUpForm.signup_phone.value,
        address: SignUpForm.signup_address.value
    });
    $('#songs-list').empty();
});
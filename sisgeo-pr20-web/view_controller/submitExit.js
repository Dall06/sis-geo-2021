ExitLi.addEventListener('click', (event) => {
    event.preventDefault();

    var loginModel = new User();
    loginModel.Logout();
});
const SignUpForm = document.getElementById("signupForm");
const TodoForm = document.getElementById("todo-form");
const LoginForm = document.getElementById("loginForm");
const SongsList = document.getElementById('songs-list');
const TODOsList = document.getElementById('todos-list');
const AccountInfoCard = document.getElementById('account-info-card');
const AccountImgSrc = document.getElementById('image-source');
const ExitButton = document.getElementById('exit-btn');
const MainDiv = document.getElementById('main-div');
const LoggedDiv = document.getElementById('logged-div');
const loginTab = document.getElementById("login-tab");
const loginA = document.getElementById("a-login");
const signUpA = document.getElementById("a-signup");
const signUpTab = document.getElementById("signup-tab");

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

var isGoogleLogged = false;
var userUid;
var isLogged = false;

var markerMap;
var map;
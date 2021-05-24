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
        auth.signInWithEmailAndPassword(this.email, this.password).then((response) => {
            userUid = response.user.uid;
            console.log(userUid);
        }).then(() => {
            isLogged = true;
            LoginForm.reset();

            MainDiv.classList.add('d-none');
            LoggedDiv.classList.remove('d-none');
            loadSongsInfo();
        }).catch((err) => {
            LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
        });
    }

    Logout = () => {
        auth.signOut().then(() => {
            if (navigator.geolocation ) {
                console.log(userUid);
                navigator.geolocation.getCurrentPosition((p) => {
                    database.collection('users').doc(userUid).update({
                        lat: p.coords.latitude,
                        lng: p.coords.longitude,
                    });
                });
            }
            TODOsList.innerHTML = '';
            map.clearOverlays();
            document.getElementById('main-div').classList.remove('d-none');
            document.getElementById('logged-div').classList.add('d-none');
        });
    };

    SignUp = (object) => {
        auth.createUserWithEmailAndPassword(this.email, this.password).then((credentials) => {
            alert('Signed Up');
            userUid = credentials.user.uid;
            return database.collection('users').doc(credentials.user.uid).set({
                name: object.name,
                phone: object.phone,
                address: object.address,
                lat: 0.0,
                lng: 0.0,
            });
        }).then(() => {
            isLogged = true;
            SignUpForm.reset();
            MainDiv.classList.add('d-none');
            LoggedDiv.classList.remove('d-none');
            loadSongsInfo();
        }).catch((err) => {
            SignUpForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
            alert(err);
        });
    }

};

// export default Registry;
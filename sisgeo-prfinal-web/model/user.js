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
            console.log(response)
        }).then(() => {
            LoginForm.reset();
            document.getElementById('main-div').classList.add('d-none');
            document.getElementById('logged-div').classList.remove('d-none');
            loadSongsInfo();
        }).catch((err) => {
            LoginForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
        });
    }

    setLastPosition = (p) => {
        database.collection('users').doc(credentials.user.uid).update({
            lat: p.coords.latitude,
            lng: p.coords.longitude,
        })
    }

    Logout = () => {
        if (navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition(setLastPosition);
        }

        auth.signOut().then(() => {
            document.getElementById('main-div').classList.remove('d-none');
            document.getElementById('logged-div').classList.add('d-none');
        });
    };

    SignUp = (object) => {
        auth.createUserWithEmailAndPassword(this.email, this.password).then((credentials) => {
            alert('Signed Up');
            return database.collection('users').doc(credentials.user.uid).set({
                name: object.name,
                phone: object.phone,
                address: object.address,
                lat: 0.0,
                lng: 0.0,
            })
        }).then(() => {
            SignUpForm.reset();
            document.getElementById('main-div').classList.remove('d-none');
            document.getElementById('logged-div').classList.add('d-none');
            loadSongsInfo();
        }).catch((err) => {
            SignUpForm.querySelector('.error').innerHTML = validateErrMsj(err.code);
            alert(err);
        });
    }

};

// export default Registry;
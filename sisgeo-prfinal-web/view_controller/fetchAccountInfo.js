const ConfigureMenu = (user) => {
    if (user) {
        if (isGoogleLogged == false) {
            database.collection('users').doc(user.uid).get().then(doc => {
                const html = `
                    <p>Name: ${doc.data().name}</p>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${doc.data().phone}</p>
                    <p>Address: ${doc.data().address}</p>
                `;
                AccountInfoCard.innerHTML = html;
            });
        }
    }
    else {
        AccountInfoCard.innerHTML = '';
    }
}

auth.onAuthStateChanged((user) => {
    if (user) {
        database.collection('todos').onSnapshot(snapshot => {
            GetTODOS(snapshot);
            ConfigureMenu(user);
        }, err => {
            console.log(err.message);
        });

        
        var name, email, photoUrl, uid, emailVerified;

        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;

        console.log(name, email, photoUrl, emailVerified, uid);
    } else {
        GetTODOS([]);
        ConfigureMenu();
    }
});
const ConfigureMenu = (user) => {
    if (user) {
        if (isGoogleLogged == false) {
            database.collection('users').doc(user.uid).get().then(doc => {
                const html = `
                    <p>Name: ${doc.data().name}</p>
                    <p>Email: ${user.data().email}</p>
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
        database.collection('food').onSnapshot(snapshot => {
            ConfigureMenu(user);
        }, err => {
            console.log(err.message);
        });
        return;
    }
    ConfigureMenu();
    return;
});
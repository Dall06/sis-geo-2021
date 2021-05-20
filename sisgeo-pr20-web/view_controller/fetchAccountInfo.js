const ConfigureMenu = (user) => {
    if (user) {
        database.collection('users').doc(user.uid).get().then(doc => {
            const html = `
                <p>Name: ${doc.data().name}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${doc.data().phone}</p>
                <p>Address: ${doc.data().address}</p>
            `;
            FetchInfoDiv.innerHTML = html;
        });

        loggedInItems.forEach(item => item.style.display = 'block');
        loggedOutItems.forEach(item => item.style.display = 'none');
    }
    else {
        FetchInfoDiv.innerHTML = '';
        loggedInItems.forEach(item => item.style.display = 'none');
        loggedOutItems.forEach(item => item.style.display = 'block');
    }
}

const GetDishes = (data) => {
    if (data.length) {
        let innerHTMLDiv = '';
        data.forEach(document => {
            const docData = document.data();
            const column = `
            <div class="card" style="width: 18rem;">
                <img src="img/${docData.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Name: ${docData.name}</h5>
                <p>$${docData.price}</p>
                <p class="card-text">Price</p>
                </div>
            </div> `;
            innerHTMLDiv += column;
        });
        ListFood.innerHTML = innerHTMLDiv;
    }
    else {
        ListFood.innerHTML = '<p class="text-center">Ingrese con sus claves para ver los platillos.</p>';
    }
}

auth.onAuthStateChanged((user) => {
    if (user) {
        database.collection('food').onSnapshot(snapshot => {
            GetDishes(snapshot.docs);
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

    }
    else {
        GetDishes([]);
        ConfigureMenu();
    }
});
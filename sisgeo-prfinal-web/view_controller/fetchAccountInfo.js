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

const onDelete = (e) => {
    e.preventDefault();
    let id = e.target.parentElement.getAttribute("id");
    console.log('hi there')
    database.collection("todos").doc(id).delete();
}

auth.onAuthStateChanged((user) => {
    if (user) {
        database.collection("todos").onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            ConfigureMenu(user);

            changes.forEach((change) => {
                if (change.type == "added") {
                    var doc = change.doc;

                    let li = document.createElement("li");
                    let title = document.createElement("span");
                    let description = document.createElement("span");
                    let category = document.createElement("span");

                    let delete_button = document.createElement("button");

                    delete_button.className = "btn btn-danger m-3";
                    delete_button.textContent = "delete";
                    delete_button.addEventListener("click", onDelete)


                    title.textContent = "Title: " + doc.data().title + " ";
                    description.textContent = "Description: " + doc.data().description + " ";
                    category.textContent = "Category: " + doc.data().category + " ";

                    li.setAttribute("id", doc.id);

                    li.appendChild(title);
                    li.appendChild(description);
                    li.appendChild(category);
                    li.appendChild(delete_button);

                    TODOsList.appendChild(li);
                } else if (change.type == "removed") {
                    //renderProducts(change.doc);
                    let id = document.getElementById(change.doc.id)
                    TODOsList.removeChild(id);
                }
            });
        })



        var name, email, photoUrl, uid, emailVerified;

        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;

        console.log(name, email, photoUrl, emailVerified, uid);
    } else {
        ConfigureMenu();
    }
});
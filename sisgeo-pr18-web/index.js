var firebaseConfig = {
    apiKey: "AIzaSyCPLb1ClS43wfuD9MFz3K9qWUxrKPPtvEA",
    authDomain: "sis-geo-2021.firebaseapp.com",
    projectId: "sis-geo-2021",
    storageBucket: "sis-geo-2021.appspot.com",
    messagingSenderId: "707123266803",
    appId: "1:707123266803:web:c3a388fb17b07fb062a386"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const ulList = document.querySelector("#ulList");
const formList = document.querySelector("#formList");

const onSubmit = (e) => {
    e.preventDefault();
    database.collection("products").add({
        name: formList.name.value,
        code: formList.code.value
    });
}
formList.addEventListener('submit', onSubmit);

const onDelete = (e) => {
    let id = e.target.parentElement.getAttribute("id");
    database.collection("products").doc(id).delete();
}

const renderProducts = (doc) => {
    let li = document.createElement("li");
    let name = document.createElement("span");
    let code = document.createElement("span");

    let delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger m-3";
    delete_button.textContent = "delete";
    delete_button.addEventListener("click", onDelete)


    name.textContent = doc.data().name + " ";
    code.textContent = doc.data().code + " ";

    li.setAttribute("id", doc.id);
    li.appendChild(name);
    li.appendChild(code);
    li.appendChild(delete_button);

    ulList.appendChild(li);
}

database.collection("products").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();

    changes.forEach((change) => {
        if (change.type == "added") {
            renderProducts(change.doc);
        } else if (change.type == "removed") {
            //renderProducts(change.doc);
            let id = document.getElementById(change.doc.id)
            ulList.removeChild(id);
        }
    });
})

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
const auth = firebase.auth();
const database = firebase.firestore();
import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyAPCiCl5501UVm6quqY5_tdN3XRWN9U9d8",
    authDomain: "enjoy-kg.firebaseapp.com",
    projectId: "enjoy-kg",
    storageBucket: "enjoy-kg.appspot.com",
    messagingSenderId: "477101640554",
    appId: "1:477101640554:web:9c8e95e4adf974f0b87313"
};

firebase.initializeApp(firebaseConfig)
export default firebase;
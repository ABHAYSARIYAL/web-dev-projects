const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');



registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
//setup for firebase authentication

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLxcXwLkTYop1pOB3ZJyaB1EpYpGnyYzg",
    authDomain: "authentication2-fe37a.firebaseapp.com",
    projectId: "authentication2-fe37a",
    storageBucket: "authentication2-fe37a.appspot.com",
    messagingSenderId: "288906789019",
    appId: "1:288906789019:web:fe9d2eca0895a0ce05c63e"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//signup function
const signUp=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
         .then((result) => {
            // Signed in 
            console.write("you are signed up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}
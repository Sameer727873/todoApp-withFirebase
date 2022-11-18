
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


 const firebaseConfig = {
   apiKey: "AIzaSyC6DFsxXyPLK1EBQ-SK-FaZVwLYCXfiPw4",
   authDomain: "todoapp-withfirebase.firebaseapp.com",
   projectId: "todoapp-withfirebase",
   storageBucket: "todoapp-withfirebase.appspot.com",
   messagingSenderId: "940461463285",
   appId: "1:940461463285:web:d97d22d3795fafc5b097bc",
   measurementId: "G-GHXVSX2NFT"
 };

 
 const app = initializeApp(firebaseConfig);;
 const auth = getAuth(app);
 const db = getDatabase();

 var registerbtn = document.getElementById("registerbtn");
 
 registerbtn.addEventListener("click", function() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let username = document.getElementById("username");
    createUserWithEmailAndPassword(auth, email.value, password.value,username.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(db,`users/${user.uid}`),{
      email: email.value,
      password: password.value,
      username: username.value,
    });
  })  

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error==>",error);
    // ..
  });
});


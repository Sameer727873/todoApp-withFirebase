import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 import { getDatabase, ref, onValue,get} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
 const firebaseConfig = {
   apiKey: "AIzaSyC6DFsxXyPLK1EBQ-SK-FaZVwLYCXfiPw4",
   authDomain: "todoapp-withfirebase.firebaseapp.com",
   projectId: "todoapp-withfirebase",
   storageBucket: "todoapp-withfirebase.appspot.com",
   messagingSenderId: "940461463285",
   appId: "1:940461463285:web:d97d22d3795fafc5b097bc",
   measurementId: "G-GHXVSX2NFT"
 };
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();
 var loginbtn = document.getElementById("loginbtn")
 loginbtn.addEventListener("click",function(){
    let loginemail = document.getElementById("loginemail");
    let loginpassword = document.getElementById("loginpassword");
    const auth = getAuth();
signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // onValue(ref(db, `users/${user.uid}`), (data) => {
    //   console.log("data==>", data.val());
    // });
    get(ref(db, `users/${user.uid}`))
    .then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error==>",error)
  });

 });
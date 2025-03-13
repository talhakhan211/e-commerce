
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import { getAuth, 
    onAuthStateChanged ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQLgUWMgJiC8fqgpLCrQMbkr9ZUMEqz_g",
    authDomain: "e-commerce-42cd5.firebaseapp.com",
    projectId: "e-commerce-42cd5",
    storageBucket: "e-commerce-42cd5.firebasestorage.app",
    messagingSenderId: "577025183325",
    appId: "1:577025183325:web:d55a8c0ae90b877f3807b4",
    measurementId: "G-8Q9TK40XPH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const signup_email=document.getElementById("signup_email");
  const signup_password =document.getElementById("signup_password");
  const signup_btn =document.getElementById("signup_btn");

  const signin_email =document.getElementById("signin_email");
  const signin_password =document.getElementById("signin_password");
  const signin_btn =document.getElementById("signin_btn");

  signup_btn.addEventListener("click", creatUserAccount);
signin_btn.addEventListener('click',signIn);
  onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("user in")
        

      const uid = user.uid;
    } else {
     
      // ...
    }
  });
  
function creatUserAccount(){
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
    .then((userCredential) => {
    console.log("user=>" , user);
    
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
}

function signIn(){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log ('Signed in'); 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
}

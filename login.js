// console.log("from  login.js");
// var btn=document.getElementById("sub-btn");

// btn.addEventListener('click');

// function abc(e){
//     e.preventDefault();
//     var email=document.getElementById("inputEmail").value;
//     var passl=document.getElementById("inputPassword").value;
//     //console.log(email,pass);

// }


// var firebaseConfig = {
//     apiKey: "AIzaSyDlELtydizA-kV7NeIwWg8J64nX37p6n88",
//     authDomain: "clean-blog-5eb91.firebaseapp.com",
//     databaseURL: "https://clean-blog-5eb91.firebaseio.com",
//     projectId: "clean-blog-5eb91",
//     storageBucket: "",
//     messagingSenderId: "350694222866",
//     appId: "1:350694222866:web:88ddd5efb98f3466fabccb"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });
  

// Firstly, the Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlELtydizA-kV7NeIwWg8J64nX37p6n88",
  authDomain: "clean-blog-5eb91.firebaseapp.com",
  databaseURL: "https://clean-blog-5eb91.firebaseio.com",
  projectId: "clean-blog-5eb91",
  storageBucket: "",
  messagingSenderId: "350694222866",
  appId: "1:350694222866:web:ecffebfd11755922fabccb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
var signin_button=document.getElementById('sub-btn');
var logbtn = document.getElementById("logout");
var inputPassword=document.getElementById('inputPassword');
var inputEmail=document.getElementById('inputEmail');

signin_button.addEventListener('click',e=>{
  e.preventDefault();
  var password=inputPassword.value;
  var email=inputEmail.value;

  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
    document.location.href = "index.html";
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
  });

});
logbtn.addEventListener("click", logout);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.email);
    // document.location.href = "index.html";
    // ...
  } else {
    // User is signed out.
    console.log("no user");
    // document.location.href = "index.html"
    // window.location.href="index.html";
    // ...
  }
});


function logout()
{
firebase.auth()
  .signOut()
  .then(function() {
      console.log("logged out");
      document.location.href = "index.html";
}).catch(function(error) {
// An error happened.
});
}
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
  
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('comments1');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form function here
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = document.getElementById('name').value; //getInputVal('name');
    // var company = getInputVal('company');
    // var email = getInputVal('email');
    // var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  
    //redirect to home page
  
    setTimeout(function(){
      document.location.href="./index.html";
    },3050);
  
  
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
        
      } else {
        // User is signed out.
        // ...
        window.location.href="login.html";
      }
      
      // ...
    });
  
  // Save message to firebase
  function saveMessage(name, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
    //   company:company,
    //   email:email,
    //   phone:phone,
      message:message
    });
  }
  
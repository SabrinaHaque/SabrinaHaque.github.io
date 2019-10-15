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
//   const auth = firebase.auth();

//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log(user.uid);
//       if (user.uid == "SART4tgxs2NKM79MPWuNtoojkWT2") {
//         createTable();
//       } else {
//         document.location.href = "index.html";
//       }
//     } else {
//       document.location.href = "index.html";
//     }
//   });

//   var refUser = "admin";
//   var userRef = firebase.database().ref(refUser);
  
    function createtable()
    {
        var table=document.getElementById("table_body1");
  
        var ref=firebase.database().ref("comments1");
  
        ref.on("value",data=>{
            var alldata=data.val();
            var keys=Object.keys(alldata);
  
            for(var i=0;i<keys.length;i++)
            {
                var index=keys[i];
  
                var row=table.insertRow();
                var cell1=row.insertCell(0);
                var cell2=row.insertCell(1);
                // var cell3=row.insertCell(2);
               
  
  
                cell1.innerHTML=alldata[index].name;
                // cell2.innerHTML=alldata[index].email;
                cell2.innerHTML=alldata[index].message;
            }
  
  
        },errorfunc);
    }
  
    function errorfunc(err)
    {
      console.log("Error!! id: ");
      console.log(err);
    }
  
    createtable();
  
var firebaseConfig = {
      apiKey: "AIzaSyC1L4ERIjC38Hj021HOe24kKIe7B8ridWs",
      authDomain: "kwitter-e7991.firebaseapp.com",
      databaseURL: "https://kwitter-e7991-default-rtdb.firebaseio.com",
      projectId: "kwitter-e7991",
      storageBucket: "kwitter-e7991.appspot.com",
      messagingSenderId: "85194135322",
      appId: "1:85194135322:web:7cd0440633769e68637ea3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

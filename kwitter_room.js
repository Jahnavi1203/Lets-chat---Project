//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDEf04XEjwwJy1UlyNfgx84gAvuUeNt6cM",
    authDomain: "kwitter-2-9c52b.firebaseapp.com",
    databaseURL: "https://kwitter-2-9c52b-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-9c52b",
    storageBucket: "kwitter-2-9c52b.appspot.com",
    messagingSenderId: "41198623655",
    appId: "1:41198623655:web:28503cd5d6d2c19f2f3482"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = user_name;

  function addRoom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
           purpose: "Room name added"
       })

       localStorage.setItem("room_name" , room_name);
       
      window.location = "Kwitter_page.html";
      

  }

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room name - " + Room_names);
  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"
  //End code
  });});}
  getData();
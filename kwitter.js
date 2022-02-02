user_name=localStorage.getItem("UserName");
document.getElementById("user_name_lb").innerHTML=user_name;
var firebaseConfig = {
    apiKey: "AIzaSyADVmCb4aoavoo7S_PvyhuFlAB80Oc2ix8",
    authDomain: "kwitter-project-bf7cc.firebaseapp.com",
    databaseURL: "https://kwitter-project-bf7cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-bf7cc",
    storageBucket: "kwitter-project-bf7cc.appspot.com",
    messagingSenderId: "243798724787",
    appId: "1:243798724787:web:6697226bc0806dda97a0c6"
  };

  firebase.initializeApp(firebaseConfig);

  function add_room(){
    room_name=document.getElementById("room_name_int").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"add room name"
  });
  localStorage.setItem("Room name",room_name);
  document.getElementById("room_name_int").value="";
  window.location="kwitter_chat_page.html";
  }
  
  function logout(){
  window.location="index.html";
  localStorage.removeItem("UserName");
  localStorage.removeItem("Room name");
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";

document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();

function redirectToRoomName(chosen_room){
console.log("chosen room ="+chosen_room);
localStorage.setItem("Room name",chosen_room);
window.location="kwitter_chat_page.html";
}
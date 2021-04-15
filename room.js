function change()
{
    document.getElementById("heading").style.color = "DeepPink" ;
    document.getElementById("heading").style.fontFamily = "Lucida Handwriting" ;

}
function normal()
{
    document.getElementById("heading").style.color = "yellow" ;
    document.getElementById("heading").style.fontFamily = "Times New Roman" ;
}


var firebaseConfig = {
    apiKey: "AIzaSyBFUEaJqw9ooP_EnM19flNjExtcs_CPOOo",
    authDomain: "anjali-menon-project-93.firebaseapp.com",
    databaseURL: "https://anjali-menon-project-93-default-rtdb.firebaseio.com",
    projectId: "anjali-menon-project-93",
    storageBucket: "anjali-menon-project-93.appspot.com",
    messagingSenderId: "96744447122",
    appId: "1:96744447122:web:e67c16b1b8e808330a9a4b",
    measurementId: "G-TH5DXRH60D"
  };
  firebase.initializeApp(firebaseConfig) ;

  function addRoom(){
    room_name = document.getElementById("room_name_input").value;

    firebase.database().ref("/").child(room_name).update(
        {purpose : "adding room name"}
);

    localStorage.setItem("room_name", room_name);

    window.location = "page.html";
}    
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names) ;
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>" ;
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();
function redirectToRoomName(name) 
{
      console.log(name) ;
      localStorage.setItem("room_name" , name) ;
      window.location = "page.html" ;
} 
function logout()
{
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;
    window.location = "index.html" ;
}






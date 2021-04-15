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
user_name = localStorage.getItem("User name") ;
room_name = localStorage.getItem("room_name") ;

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0
  });

  document.getElementById("msg").value = "";
}

function getData()
{
firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
   document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
       childKey  = childSnapshot.key; childData = childSnapshot.val(); 
       if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
                 
       name_of_user = message_data['name'] ;
       like = message_data['like'] ;
       message = message_data['message'] ;

       tag_1 = "<h4 style='color:black; font-weight:900;'>" + name_of_user + "<img class='user_tick' src = 'tick.png'>" + "</h4>" ;
       tag_2 = "<h4 style='color:red;'>" + message + "</h4>" ;
       tag_3 = "<button class='btn btn-warning' id="+firebase_message_id+" value =" + like + " onclick='like_update(this.id)'>" ;
       tag_4 = "<span class='glyphicon glyphicon-thumbs-up'> Like: " +like+"</span> </button> <hr> <br>" ;
       row = tag_1 + tag_2 + tag_3 + tag_4 ;
       document.getElementById("output").innerHTML += row;
       }
   }) ;
}) ;
}
getData();
function like_update(message_id)
{
  button_id = message_id ;
  like = document.getElementById(button_id).value;
  updated_like = Number(like) + 1;
  console.log(updated_like) ;


  firebase.database().ref(room_name).child(message_id).update({
    like:updated_like
  }) ;
}

function logout()
{
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;
    window.location = "index.html" ;
}

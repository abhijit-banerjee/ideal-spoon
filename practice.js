var firebaseConfig = {
    apiKey: "AIzaSyBotoIB6sYCUhaECF-SC-toBqxAZJExLYw",
    authDomain: "kwitter-36e53.firebaseapp.com",
    databaseURL: "https://kwitter-36e53-default-rtdb.firebaseio.com",
    projectId: "kwitter-36e53",
    storageBucket: "kwitter-36e53.appspot.com",
    messagingSenderId: "802106567573",
    appId: "1:802106567573:web:e46443f480240f0e58649c"
  };
  
  
 firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
const firebaseConfig = {
    apiKey: "AIzaSyCOk12s2pYANR5f887ZlHZRkMyE3KuWsK4",
    authDomain: "classtext-620db.firebaseapp.com",
    databaseURL: "https://classtext-620db-default-rtdb.firebaseio.com",
    projectId: "classtext-620db",
    storageBucket: "classtext-620db.appspot.com",
    messagingSenderId: "1004222728623",
    appId: "1:1004222728623:web:601fc0bdf9a466253fc75a"
  };

  irebase.initializeApp(firebaseConfig); 
  function addUser()
  { 
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); 
  }
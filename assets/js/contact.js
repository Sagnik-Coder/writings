var firebaseConfig = {
    apiKey: "AIzaSyAFfMnKqChuZMsEwfyh3cmt-zavUFovyxI",
    authDomain: "sagar-writing.firebaseapp.com",
    databaseURL: "https://sagar-writing-default-rtdb.firebaseio.com",
    projectId: "sagar-writing",
    storageBucket: "sagar-writing.appspot.com",
    messagingSenderId: "1012935079811",
    appId: "1:1012935079811:web:8bfa5dd43d9845f91728b6",
    measurementId: "G-3GF44QX9S2"
  };
  firebase.initializeApp(firebaseConfig);
  
  var messagesRef = firebase.database().ref("messages");
  
  document.getElementById("contact__form").addEventListener("submit", submitForm);
  
  function submitForm(e){
    e.preventDefault();
  
    var name = getInputVal("name");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");
  
    saveMessage(name, email, phone, message);

  
    document.getElementById('contactform').reset();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }

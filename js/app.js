//Splash
$(document).ready(function () {
    setTimeout(function () {
        $('#splash').fadeOut(600);
    }, 3500);
});

//Firebase API
var config = {
    apiKey: "AIzaSyAwTBAeP408SCZN6FD50NP6SkTW6Mu8BvY",
    authDomain: "dayrafolio.firebaseapp.com",
    databaseURL: "https://dayrafolio.firebaseio.com",
    projectId: "dayrafolio",
    storageBucket: "dayrafolio.appspot.com",
    messagingSenderId: "352703885079"
  };
  firebase.initializeApp(config);
 
//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();
    
//Get values
var name = getInputVal('name');
var email = getInputVal('email');
var message = getInputVal('message');

//Save message
saveMessage(name, email, message);

//Show alert
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

//Clear form
document.getElementById('contactForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage (name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("topnavDrop");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
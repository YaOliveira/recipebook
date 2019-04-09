$(document).ready(function() {
  $("#google-button").click(function(event) {
    event.preventDefault();
    
    let provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
    .then(function(response) {
       window.location = "./src/post/post.html?id=" + response.user.uid;
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  })
});
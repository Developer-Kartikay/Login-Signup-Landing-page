firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Sign-In
document.querySelector('.google-btn').addEventListener('click', function () {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      console.log("Welcome, " + user.displayName);

      // ✅ Give the browser a moment before redirecting
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 100); // 100ms delay
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6EUBAT6Vuhjp17fCi-57DnRibSaEuTtY",
    authDomain: "hackathon-f9094.firebaseapp.com",
    projectId: "hackathon-f9094",
    storageBucket: "hackathon-f9094.firebasestorage.app",
    messagingSenderId: "1042760528442",
    appId: "1:1042760528442:web:43b2a0bee6ac012a82bb03",
    measurementId: "G-LHBE5YTMK3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Wait for DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Sign Up Function
  let signUp = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("full_name").value;

    // Check for empty inputs (basic validation)
    if (email && password && fullName) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // Redirect to the create post page after successful signup
          window.location.href = 'create-post.html'; // Redirect to the post creation page
        })
        .catch((error) => {
          console.log("Sign Up Error: ", error.message);
          alert("Error: " + error.message); // Optional: display error to user
        });
    } else {
      alert("All fields are required!");
    }
  };

  // Sign In Function
  let signIn = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if email and password are provided
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in: ", user);

          // Redirect to the create-post page after successful sign-in
          window.location.href = 'create-post.html'; // Redirect to the post creation page
        })
        .catch((error) => {
          console.log("Sign In Error: ", error.message);
          alert("Error: " + error.message); // Show the error message to the user
        });
    } else {
      alert("Both email and password are required!");
    }
  };

  // Add event listeners for the Sign Up and Sign In buttons
  const signUpButton = document.getElementById("sign_up");
  const signInButton = document.getElementById("sign_in_button");

  if (signUpButton) {
    signUpButton.addEventListener("click", signUp);
  }

  if (signInButton) {
    signInButton.addEventListener("click", signIn);
  }
});

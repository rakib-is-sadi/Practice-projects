import { auth, db } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  ref,
  set,
  get
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

console.log("script loaded");

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      get(ref(db, "users/" + user.uid)).then((snapshot) => {
        const data = snapshot.val();
        if (data.role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "user.html";
        }
      });
    })
    .catch((error) => {
      console.log("Error: " + error.message);
    });
}



function registerUser() {
  console.log("register clicked");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("trying to save to database...");
      set(ref(db, "users/" + user.uid), {
        email: email,
        role: "user",
      })
        .then(() => {
          console.log("Register successful!");
          window.location.href = "user.html";
        })
        .catch((error) => {
          console.log("Database error: " + error.message);
        });
    })
    .catch((error) => {
      console.log("Error: " + error.message);
    });
}

document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();
  registerUser();
});


document.getElementById("loginBtn").addEventListener("click", function(e) {
  e.preventDefault();
  loginUser();
});

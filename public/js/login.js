import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { firebaseConfig } from "../../config/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

document.querySelector("button").addEventListener("click", () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log("User data:", userData);
        alert(`Welcome back! You have ${userData.points} points.`);
        setTimeout(() => {
          window.location.href = "/dashBoard";
        }, 3000);
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
});

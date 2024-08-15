import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNdibGOnov2bBTXv1rAfei60Tl1Of4jjk",
  authDomain: "smarteducationauth.firebaseapp.com",
  projectId: "smarteducationauth",
  storageBucket: "smarteducationauth.appspot.com",
  messagingSenderId: "4287784881",
  appId: "1:4287784881:web:f1fa5a9130cf192fd4bf90"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.querySelector("button").addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        points: 0
      });

      console.log("User created and points initialized:", user);
      window.location.href = "/login";
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
});

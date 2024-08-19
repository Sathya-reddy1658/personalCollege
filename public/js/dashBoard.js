import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged, // AuthObserver
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// import { firebaseConfig } from "../../config/firebaseConfig.js";
export const firebaseConfig = {
  apiKey: "AIzaSyCNdibGOnov2bBTXv1rAfei60Tl1Of4jjk",
  authDomain: "smarteducationauth.firebaseapp.com",
  projectId: "smarteducationauth",
  storageBucket: "smarteducationauth.appspot.com",
  messagingSenderId: "4287784881",
  appId: "1:4287784881:web:f1fa5a9130cf192fd4bf90",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector(".nav-img").addEventListener("click", () => {
  onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed:", user);
    if (!user) {
      window.location.href = "/login";
    } else {
      window.location.href = "/dashBoard";
    }
  });
  
});

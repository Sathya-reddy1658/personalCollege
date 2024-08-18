import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged, // AuthObserver
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { firebaseConfig } from "../../config/firebaseConfig.js";

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

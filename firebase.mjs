import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdYb2q_NMzHTD4LMH_qGXP67MHtUDC7jQ",
  authDomain: "my-bio-6e772.firebaseapp.com",
  projectId: "my-bio-6e772",
  storageBucket: "my-bio-6e772.appspot.com",
  messagingSenderId: "156385733773",
  appId: "1:156385733773:web:c90eb0fb4a20ea5a2846c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const nameInput = document.getElementById("nome");
const messageInput = document.getElementById("mensagem");
document.getElementById("submit").addEventListener("click", async function (event) {
  this.toggleAttribute("disabled");
  event.preventDefault();

  await addDoc(collection(db, "comments"), {
    createdAt: new Date().toISOString(),
    name: nameInput.value,
    message: messageInput.value,
  });

  this.toggleAttribute("disabled");
  clearForm();
});

function clearForm() {
  nameInput.value = "";
  messageInput.value = "";
}

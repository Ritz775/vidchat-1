// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeDuCCj3v3Yh75BF87dpW9We2YTxYmEXA",
  authDomain: "kwitter-23a0b.firebaseapp.com",
  databaseURL: "https://kwitter-23a0b-default-rtdb.firebaseio.com",
  projectId: "kwitter-23a0b",
  storageBucket: "kwitter-23a0b.appspot.com",
  messagingSenderId: "338494721100",
  appId: "1:338494721100:web:a34669d7fc92d91b20b8e9",
};

// Initialize Firebase

function next_page() {
  user_name = document.getElementById("username").value;
  localStorage.setItem("user_name", user_name);
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user",
  });
  roomname = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  window.location = "video_page.html";
}

function create() {
  window.location = "video_page.html";
  create = document.getElementById("room_name_create").value;
  localStorage.setItem("create", create);
}

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

Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

camera1 = document.getElementById("camera1");

Webcam.attach("#camera1");

// Import Firebase and Database services
// @ts-ignore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// @ts-ignore
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdvyaWj8iuzbIpA1mQCCa41g6uYVYZ4SI",
  authDomain: "resume-builder-44823.firebaseapp.com",
  databaseURL: "https://resume-builder-44823-default-rtdb.firebaseio.com",
  projectId: "resume-builder-44823",
  storageBucket: "resume-builder-44823.appspot.com",
  messagingSenderId: "651490548449",
  appId: "1:651490548449:web:bcca8cf34bc83ab51335a0",
  measurementId: "G-H9DT52QRLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

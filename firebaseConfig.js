"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
// Import Firebase and Database services
// @ts-ignore
const firebase_app_js_1 = require("https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js");
// @ts-ignore
const firebase_database_js_1 = require("https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js");
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
const app = (0, firebase_app_js_1.initializeApp)(firebaseConfig);
const database = (0, firebase_database_js_1.getDatabase)(app);
exports.database = database;

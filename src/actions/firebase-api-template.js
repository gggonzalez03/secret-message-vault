import fb from 'firebase'
// Change the name of this file to firebase-api.js

// Some of these properties are not needed for the app to function
// These bits of information are available in your firebase console when
// you open the project. You can just copy and paste
// Initialize Firebase
var config = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID"
}

// These should be kept
fb.initializeApp(config)

export const firebase = fb
export const database = firebase.database()
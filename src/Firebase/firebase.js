import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
firebase.initializeApp({
    apiKey: "AIzaSyAL4GQZyt2x8-uTFuWQtZv_KJEiqohptbw",
    authDomain: "bogino-4361c.firebaseapp.com",
    projectId: "bogino-4361c",
    storageBucket: "bogino-4361c.appspot.com",
    messagingSenderId: "957611350256",
    appId: "1:957611350256:web:a253f43d2e9f3c54ef0a35",
    measurementId: "G-T36EX7ETZG"
});
const auth=firebase.auth()
const db=firebase.firestore();

export const createDoc=(path, data)=>{
    db.doc(path).set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp() || null,
        ...data
    })
}

export {auth, firebase, db}
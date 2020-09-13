import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const readConfig = key => {
    return process.env["REACT_APP_FIREBASE_" + key]
}

const config = {
    apiKey: readConfig("API_KEY"),
    authDomain: readConfig("AUTH_DOMAIN"),
    databaseURL: readConfig("DATABASE_URL"),
    projectId: readConfig("PROJECT_ID"),
    storageBucket: readConfig("STORAGE_BUCKET"),
    messagingSenderId: readConfig("MESSAGING_SENDER_ID")
}

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
        this.db = app.firestore()
    }

    // memberDb = () => this.db.collection("members")

    // createFirebaseUser = (obj) => {
    //     return this.auth.createUserWithEmailAndPassword(obj.email, obj.password)
    // }

    // loginFirebaseUser = (obj) => {
    //     return this.auth.signInWithEmailAndPassword(obj.email, obj.password)
    // }
}

export default Firebase
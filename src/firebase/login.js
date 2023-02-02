import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-config";

const auth = getAuth(app);


  export const signIn = async (email, password) => {
    try {
     const {user} = await signInWithEmailAndPassword(auth, email, password)
     console.log(user);
        
    } catch (error) {
        console.log(error.message)

    }

  }
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-config";
import toast from "react-hot-toast"

const auth = getAuth(app);


  export const signIn = async (email, password) => {
    try {
     const {user} = await signInWithEmailAndPassword(auth, email, password)
     toast.success("You have succesfully logged in!!")
     return user
        
    } catch (error) {
        toast.error(error.message)

    }

  }
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase-config";
import toast from "react-hot-toast"
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const googleSignIn = async () => {
try{
    const result = await signInWithPopup(auth,provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    toast.success("You have succesfully logged in!!")
    return  user 
}catch(error){
    toast.error(error.mesage, error.code)

}

}
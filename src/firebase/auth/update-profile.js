import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { app } from "../firebase-config";
const auth = getAuth(app);
export const profileUpdate = async(displayName,photoURL)=> {
    try {
       await updateProfile(auth.currentUser, {displayName, photoURL })
        toast.success("Profile updated!!")
        return auth.currentUser
    } catch (error) {
        toast.error(error.message)
    }
}
import { getAuth, updatePassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { app } from "../firebase-config";

const auth = getAuth(app);

 
export const changePassword = async (newPassword)=>{
    try {
         await updatePassword(auth.currentUser, newPassword)        
        toast.success("Your password updated!!")
        
    } catch (error) {
        toast.error(error.message)
    }
}


import { getAuth, updatePassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { app } from "../firebase-config";

const auth = getAuth(app);

const user = auth.currentUser;
 
export const changePassword = async (newPassword)=>{
    try {
         await updatePassword(user, newPassword)        
        toast.success("Your password updated!!")
        return user
    } catch (error) {
        toast.error(error.message)
    }
}


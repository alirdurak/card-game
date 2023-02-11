import { getAuth } from "firebase/auth";
import { signOut} from "firebase/auth";
import { app } from "../firebase-config";
import toast from "react-hot-toast"
const auth = getAuth(app);

export const logout = async() =>{
    try{
        await signOut(auth)
        toast.success("You haev succesfully logged out!!")
    }catch(error){
        console.log(error.message)
        toast.error(error.message)

    }
}
import { getAuth } from "firebase/auth";
import { signOut} from "firebase/auth";
import { app } from "./firebase-config";

const auth = getAuth(app);

export const logout = async() =>{
    try{
        await signOut(auth)
        console.log("out")
    }catch(error){
        console.log(error.message)

    }
}
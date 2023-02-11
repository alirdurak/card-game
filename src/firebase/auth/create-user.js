import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import  toast  from "react-hot-toast";
import { app } from "../firebase-config";


export const auth = getAuth(app);
export const register = async(email,password) =>{ 
try{
  const {user} = await createUserWithEmailAndPassword(auth, email, password);
  toast.success("Your account created succesfully!!")
  return user
}catch(error){
  toast.error(error.message)
}
} 
    
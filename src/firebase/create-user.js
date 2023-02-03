import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-config";


export const auth = getAuth(app);
export const register = async(email,password) =>{ 
try{
  const {user} = await createUserWithEmailAndPassword(auth, email, password);
  return user
}catch(error){
  console.log(error.message)
}
} 
    
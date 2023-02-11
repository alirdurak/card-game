import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { toast } from "react-hot-toast";
import { app } from "../firebase-config";

const auth = getAuth(app);
const user = auth.currentUser;

// TODO(you): prompt the user to re-provide their sign-in credentials

export const reAuth = async (password) => {
    try {
        const credential = password;
       await reauthenticateWithCredential(user, credential)
    } catch (error) {
        toast.error(error.message)
    }
}

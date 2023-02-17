import { EmailAuthProvider, getAuth, reauthenticateWithCredential } from "firebase/auth";
import { toast } from "react-hot-toast";
import { app } from "../firebase-config";

const auth = getAuth(app);
const user = auth.currentUser;

// TODO(you): prompt the user to re-provide their sign-in credentials



export const reAuth = async (password) => {
    try {
        const credential = await EmailAuthProvider.credential(
            user.email,
            password
        )
        reauthenticateWithCredential(user, credential)
        toast.success(user)
    } catch (error) {
        toast.error(error.message)
        return error.code
    }
}

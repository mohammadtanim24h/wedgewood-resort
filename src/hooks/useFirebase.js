import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase.init";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return { handleGoogleLogin };
};

export default useFirebase;

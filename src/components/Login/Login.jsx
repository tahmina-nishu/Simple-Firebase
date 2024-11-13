
import {GoogleAuthProvider} from "firebase/auth"
import auth from "../../Firebase/firebase.init";
import { signInWithPopup } from "@firebase/auth";
import { GithubAuthProvider } from "@firebase/auth";

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log(auth, provider);
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
    const provider2 = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        console.log(auth, provider2);
        signInWithPopup(auth, provider2)
        .then((result) =>{
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleGithubSignIn}>Login with Github</button>
        </div>
    );
};

export default Login;
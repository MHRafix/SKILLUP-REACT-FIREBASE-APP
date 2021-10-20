import firebaseInitialization from '../FirebaseInfo/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

firebaseInitialization();
const useFirebase = () => {
    // Use state for login and signup 
    const [user, setUser] = useState({});
    
    // State for em,ail and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Take auth provider
    const auth = getAuth();

    // Make auth provider
    const googleProvider = new GoogleAuthProvider(); // Google atuh provider
    const githubProvider = new GithubAuthProvider(); // Github auth provider

    // Handle google signin and sign up after clicking the button
    const handleGoogleSignin = () => {
          return signInWithPopup(auth, googleProvider);

    }

    // Handle github signin after clicking button 
    const handleGithubSignin = () => {
        return signInWithPopup(auth, githubProvider);
  }

    // Handle email field 
    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }

    // Handle password field 
    const handlePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }


    // Handle Registration with email and password
    const handleSubmit = e => {
        console.log(email);
          createUserWithEmailAndPassword(auth, email, password)
          .then(res => {
           console.log(res.user);
          })
    }
 
    // Handle signout  after clicking button
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    // Use effect for handle changing user 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
               setUser(user);
            }
        });
    }, [])

    return {
        user,
        handleEmail,
        handlePassword,
        handleSubmit,
        handleGithubSignin,
        handleGoogleSignin,
        handleSignOut

    }
}

export default useFirebase;
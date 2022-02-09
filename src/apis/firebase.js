import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import { getAuth,signInWithPopup,signOut} from "firebase/auth";
import firebaseConfig from '../configs/firebase';

initializeApp(firebaseConfig);

export function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider); 
}

export function signOutFromGoogle(){
    const auth = getAuth();
    return signOut(auth);
}

export function signInWithFacebook(){
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider); 
}

export function signOutFromFacebook(){
    const auth = getAuth();
    return signOut(auth);
}


import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth,signInWithPopup,signOut} from "firebase/auth";
import firebaseConfig from '../configs/firebase';


initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


export function signInWithGoogle(){
    const auth = getAuth();
    return signInWithPopup(auth, provider); 
}

export function signOutFromGoogle(){
    const auth = getAuth();
    return signOut(auth);
}

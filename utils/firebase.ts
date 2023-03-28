import { initializeApp } from "firebase/app";
import { getAuth, updateCurrentUser } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, updateDoc, addDoc} from "firebase/firestore";

const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const signUp = async (email: string, password: string, userData) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(firestore, "users"), {
        uid: auth.currentUser.uid,
        ...userData
    })
    return user
};

export const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};


export const logOut = async () => {
    await signOut(auth);
};
import { initializeApp } from "firebase/app";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence} from "firebase/auth";
import firebaseConfig from "../config/firebaseConfig";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set authentication to persist sessions
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local storage.");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });

export { auth };

export const signUp = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  return await signOut(auth);
};

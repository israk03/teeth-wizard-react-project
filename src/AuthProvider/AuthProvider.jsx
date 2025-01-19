import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  //   console.log(children);
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
  };

  return (
    <div>
      <authContext.Provider value={contextValue}>
        {children}
      </authContext.Provider>
    </div>
  );
}

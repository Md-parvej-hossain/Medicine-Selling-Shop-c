import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  //creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sosall Login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user --------->', currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    creatUser,
    signIn,
    logout,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

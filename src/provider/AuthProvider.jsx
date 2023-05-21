import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
   
    //create user

  const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }
  //signIn User
  const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
  //Google Sign in

  const signInWithGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth,googleAuthProvider)
  }
  //update Profile user

  const userUpdateProfile =(name,photo)=>{
    setLoading(true);
     updateProfile(auth.currentUser,{
      displayName : name , photoURL : photo
     })
  }
  //SignOut User 
   const logOut =()=>{
    setLoading(true);
     return signOut(auth)
   }

  // current user
  
  useEffect(()=>{
    const unSubscriber = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log("currentUser",currentUser)
        setLoading(false)
     })
     return ()=>{
       return unSubscriber();
     }
   },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        userUpdateProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
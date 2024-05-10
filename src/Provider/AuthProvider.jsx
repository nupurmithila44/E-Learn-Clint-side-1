import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.confiq";

// social Auth 
const googleProvider = new GoogleAuthProvider()
const githubprovider = new GithubAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setloader] = useState()

    // Google  login 
    const googleLogin = () => {
        setloader(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    // GitHubLogin 
    const gitHubLogin = () => {
        setloader(true)
        return signInWithPopup(auth, githubprovider)
    }

    // Register 
    const registerUser = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login SignUser 
    const singInUser = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

//   LogOut 
const logOut = ()=>{
    setloader(true)
    return signOut(auth)
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curentUser) => {
           setUser(curentUser)
           setloader(false)
           
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        registerUser,
        singInUser,
        googleLogin,
        gitHubLogin,
        logOut,
        loading
    }
    return (
       <div>
         <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
       </div>
    );
};

export default AuthProvider;
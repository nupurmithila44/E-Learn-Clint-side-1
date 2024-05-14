import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.confiq";
import axios from "axios";

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
            const userEmail = curentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
           setUser(curentUser)
           setloader(false)
        //    if user exists then issue a token
        if(curentUser){   
            axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials:true})
            .then(res=> {
                console.log('token', res.data);
            })

        }
        else{
            axios.post('http://localhost:5000/logOut',loggedUser, {
                withCredentials:true
            })
            .then(res =>{
                console.log(res.data);
            })
        }

           
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
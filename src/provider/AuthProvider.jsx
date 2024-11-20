import { createContext, useEffect, useState } from "react";
import app from "../components/firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth";


export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    console.log(user);

    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,
            password);
    };

    const authInfo={
        user,
        setUser,
        createNewUser,
    };

    useEffect(()=>{
       const unsubcribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubcribe();
        };
    }, []);



    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;